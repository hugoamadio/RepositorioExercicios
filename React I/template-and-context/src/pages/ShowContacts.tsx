import { useContext, useEffect } from "react";
import { ContactsContext } from "../contexts/ContactsContext";
import DefaultLayout from "../config/layout/DefaultLayout";

function ShowContacts() {
    const contactContext = useContext(ContactsContext);

    function handleChange() {
        console.log(contactContext?.data);
    }

    useEffect(() => {
        console.log(contactContext?.data);
    }, [contactContext]);

    const config = {
        navigation: true,
        footer: true
    };

    return (
        <DefaultLayout config={config}>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100vw',
                height: '100vh',
                backgroundColor: '#e3e3e3',
                color: '#000',
                fontSize: 'large',
                flexDirection: 'column',
                gap: '25px'
            }}>
                <div>
                    <input
                        type="text"
                        onChange={handleChange}
                        style={{ width: '350px', height: '35px', fontSize: '20px' }}
                    />
                </div>
                <div style={{
                    width: '350px',
                    height: '350px',
                    border: '1px solid black',
                    borderRadius: '14px',
                    overflowY: 'auto'
                }}>
                    {contactContext?.data?.length ? contactContext.data.map((item, index) => (
                        <div key={index} style={{ marginTop: '20px', padding: '10px', borderBottom: '1px solid #ccc' }}>
                            <p>Name: {item.name}</p>
                            <p>Phone: {item.phone}</p>
                        </div>
                    )) : <p>Nenhum contato cadastrado</p>}
                </div>
            </div>
        </DefaultLayout>
    );
}

export default ShowContacts;
