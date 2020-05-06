const INITIAL_STATE = {
    FOOTER_DATA:[
        {
            id: 1,
            title: "FAQ"
        }, 
        {
            id: 2,
            title: "Investor Relations"
        }, 
        {
            id: 3,
            title: "Privacy"
        }, 
        {
            id: 4,
            title: "Speed Test"
        }, 
        {
            id: 5,
            title: "Help Centre"
        }, 
        {
            id: 6,
            title: "Jobs"
        }, 
        {
            id: 7,
            title: "Cookie Preferences"
        }, 
        {
            id: 8,
            title: "Legal Notices"
        }, 
        {
            id: 9,
            title: "Account"
        }, 
        {
            id: 10,
            title: "Ways to Watch"
        }, 
        {
            id: 11,
            title: "Corporate Information"
        }, 
        {
            id: 12,
            title: "Netflix Originals"
        }, 
        {
            id: 13,
            title: "Media Centre"
        }, 
        {
            id: 14,
            title: "Terms of Use"
        }, 
        {
            id: 15,
            title: "Contact Us"
        }, 
        {
            id: 16,
            title: "Netflix India"
        }
    ]
}

export const footerReducer = (state=INITIAL_STATE, action) =>  {
    switch(action.type) {
        default: 
            return state;
    }
}