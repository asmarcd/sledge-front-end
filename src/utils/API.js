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

    getTicket: async (ticket) => {
        try {
            const res = await fetch(`${URL_PREFIX}/tickets/${ticket}`, {
                method: 'GET',
                body: JSON.stringify(ticket)
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
    },

    editTicket: async ticket => {
        console.log(ticket)
        try {
            const res = await fetch(`${URL_PREFIX}/tickets/${ticket.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(ticket)
            });
            return await res.json();
        } catch (err) {
            return null
        }
    },

    allLabels: async labels => {
        try {
            const res = await fetch(`${URL_PREFIX}/labels`, {
                method: 'GET',
                body: JSON.stringify(labels)
            });
            return await res.json();
        } catch (err) {
            return null;
        }
    },

    createLabel: async newLabel => {
        try {
            const res = await fetch(`${URL_PREFIX}/labels`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newLabel)
            });
            return await res.json();
        } catch (err) {
            return null;
        }
    },

    createUser: async user => {
        try {
            const res = await fetch(`${URL_PREFIX}/users`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user)
            });
            return await res.json();
        } catch (err) {
            return null;
        }
    }
    // remember to add comma above when you add next function
}

module.exports = API;