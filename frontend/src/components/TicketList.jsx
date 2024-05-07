import React, {useState, useEffect} from 'react'
import Ticket from './Ticket'

export default function TicketList( {id=null, isHome=false}) {
    const [tickets, setTickets] = useState([])

    useEffect(() => {
        const fetchTickets = async() => {
            try {
                const res = await fetch(`http://localhost:8000/tickets`)
                const data = await res.json();
                setTickets(data);
            } catch (error) {
                console.log("Error fetching data:", error);
            }
        }
        fetchTickets();
    }, [])

    return (
        <section>
            <div>
                {tickets.map((ticket) => (
                    isHome ? (
                        <div key={ticket.id}>
                            <Ticket ticket={ticket}></Ticket>
                        </div>
                    ) : (
                        ticket.status === id ? (
                            <div key={ticket.id}>
                                <Ticket ticket={ticket}></Ticket>
                            </div>
                        ) : null
                    ) 
                ))}
            </div>
        </section>
    )
}
