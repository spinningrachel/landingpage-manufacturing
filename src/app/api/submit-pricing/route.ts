import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      companyWebsite: formData.get('field'),
      challenge: formData.get('Reason-for-meeting'),
      submittedAt: new Date().toISOString()
    };

    // TODO: Send to your email service, database, CRM, etc.
    // For now, just log it
    console.log('Form submission:', data);

    // Example: Send to email service
    // await sendEmail({
    //   to: 'sales@visual-layer.com',
    //   subject: 'New Pricing Form Submission',
    //   body: JSON.stringify(data, null, 2)
    // });

    return NextResponse.json({
      success: true,
      message: 'Form submitted successfully'
    });

  } catch (error) {
    console.error('Form submission error:', error);
    return NextResponse.json(
      { success: false, message: 'Submission failed' },
      { status: 500 }
    );
  }
}
