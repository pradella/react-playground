import React, { useEffect, useState } from 'react';
import FreshChat from 'react-freshchat';

function FreshChatComponent({ token }) {
    const [canMount, setCanMount] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            // tem que ter um delay para permitir o tempo de desmontar e uma próxima renderização inicializar corretamente
            setCanMount(true);
        }, 2000);

        return () => {
            window.fcWidget.destroy();
        }
    }, []);

    if (!canMount) return null;

   return (
    <FreshChat
        token={token}
        // email: 'user@email.com',
        // first_name: '...',
        onInit={widget => {
        /* Use `widget` instead of `window.fcWidget`
            widget.user.setProperties({
            email: user.email,
            first_name: user.firstName,
            last_name: user.lastName,
            phone: user.phoneNumber,
            })
        */
    }}
  />
   ); 
}

export default FreshChatComponent;