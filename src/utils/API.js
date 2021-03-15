// for dev purposes only:
const URL_PREFIX = 'http://localhost:3001';

const API = {

    // see all tickets
    allTickets: async (tickets) => {
        try {
            const res = await fetch(`${URL_PREFIX}/tickets`, {
                method: 'GET',
                body: JSON.stringify(tickets)
            });
            return await res.json();
        } catch (err) {
            return null;
        }
    },

    // create a new ticket
    createTicket: async newTicket => {
        try {
            const res = await fetch(`${URL_PREFIX}/tickets`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newTicket)
            });
            return await res.json();
        } catch (err) {
            return null;
        }
    },

    deleteTicket: async deletedID => {
        try {
            const res = await fetch(`${URL_PREFIX}/tickets/${deletedID}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            return await res.json();
        } catch (err) {
            return null
        }
    }
    // remember to add comma above when you add next function
}

module.exports = API;