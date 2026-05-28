import { NextResponse } from 'next/server';
import clientPromise from '../../../lib/mongodb';

export async function POST(request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, city, launchSubscription, referrer, buyingRequirements } = body;

    // Server-side validation
    if (!firstName || !firstName.trim()) {
      return NextResponse.json({ success: false, message: 'First name is required' }, { status: 400 });
    }
    if (!lastName || !lastName.trim()) {
      return NextResponse.json({ success: false, message: 'Last name is required' }, { status: 400 });
    }
    if (!email || !email.trim()) {
      return NextResponse.json({ success: false, message: 'Email address is required' }, { status: 400 });
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      return NextResponse.json({ success: false, message: 'Please enter a valid email address' }, { status: 400 });
    }
    if (!phone || !phone.trim()) {
      return NextResponse.json({ success: false, message: 'Phone number is required' }, { status: 400 });
    }
    if (!/^\d{10}$/.test(phone.trim())) {
      return NextResponse.json({ success: false, message: 'Please enter a valid 10-digit phone number' }, { status: 400 });
    }
    if (!city || !city.trim()) {
      return NextResponse.json({ success: false, message: 'City is required' }, { status: 400 });
    }
    if (!buyingRequirements || typeof buyingRequirements !== 'object') {
      return NextResponse.json({ success: false, message: 'Buying requirements are required' }, { status: 400 });
    }

    // Connect to MongoDB Atlas via connection pool client promise
    const client = await clientPromise;
    const db = client.db('followproperty');
    const collection = db.collection('watchlists');

    // Insert payload
    const newEntry = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      city: city.trim(),
      launchSubscription: !!launchSubscription,
      referrer: (referrer || '').trim(),
      buyingRequirements: {
        mainCategory: buyingRequirements.mainCategory || '',
        specificType: buyingRequirements.specificType || '',
        city: buyingRequirements.city || '',
        locality: (buyingRequirements.locality || '').trim(),
        budget: Number(buyingRequirements.budget) || 0,
        preApprovedBank: buyingRequirements.preApprovedBank || '',
        loanAmount: Number(buyingRequirements.loanAmount) || 0,
        downPayment: Number(buyingRequirements.downPayment) || 0,
        possessionYear: buyingRequirements.possessionYear || '',
        preferredBuilder: buyingRequirements.preferredBuilder || ''
      },
      registeredAt: new Date()
    };

    const result = await collection.insertOne(newEntry);

    return NextResponse.json({
      success: true,
      message: 'Successfully registered watchlist preferences.',
      watchlistId: result.insertedId.toString()
    });

  } catch (error) {
    console.error('Watchlist MongoDB API Error:', error);
    return NextResponse.json({
      success: false,
      message: 'Server database error. Please verify your connection config and try again.'
    }, { status: 500 });
  }
}
