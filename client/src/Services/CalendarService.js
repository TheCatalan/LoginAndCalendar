export default {
    getCalendarEvents : () => {
        return fetch('/user/calendarevents')
                .then(response=>{
                    if(response.status !== 401){
                        return response.json().then(data=> data);
                    }
                    else
                        return {message : {msgBody : "UnAuthorized"}, msgError : true};
                });
    },
    postCalendarEvent : calendarEvent => {
        return fetch('/user/calendarevent',{
            method : "post",
            body: JSON.stringify(calendarEvent),
            headers : {
                'Content-Type' : 'application/json'
            }
        }).then(response=>{
                if(response.status !== 401){
                    return response.json().then(data => data);
                }
                else
                    return {message : {msgBody : "UnAuthorized"}, msgError : true};
        });
    }
}