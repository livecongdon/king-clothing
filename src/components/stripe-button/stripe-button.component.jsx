import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JZhf6A1EypKO9ctQo14hxoo5md2ImOiR0H9AXsFtS0oDGhySoJHgO9yTV6oy5Zz1Mvwc1RwLPwdVVxfeilnoQDo00EfAKSEcC'

    const onToken = token => {
        alert('Payment Successful');
    }

    return (
        <StripeCheckout label='Pay Now' 
                        name='King Clothing'
                        billingAddress
                        shippingAddress
                        image='https://svgshare.com/i/CUz.svg'
                        description={`Your total is $${price}`}
                        amount={priceForStripe}
                        panelLabel='Pay Now'
                        token={onToken}
                        stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;