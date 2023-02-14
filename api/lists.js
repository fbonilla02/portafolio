
const posts =  [
      { 
        id: 1, 
        title: "Clon Twitter",
        shortDesc: "MongoDb, Express, React, Node  ",
        largeDesc: "",
        img:"xd",

    },{ 
        id: 2, 
        title: "Monitorias",
        shortDesc: "CRUD con firebase",
        largeDesc: "",
        img:"xd",

    },{
        id: 3, 
        title: "Front-end Mentor",
        shortDesc: "Diversos proyectos para mejorar en las interfaces ",
        largeDesc: "",
        img:"xd",
    },{
         id: 4, 
        title: "Academia Geek",
        shortDesc: "Varios proyectos que realice en el bootcamp de Academia Geek",
        largeDesc: "",
        img:"xd",
    }
    ];


export default function lists(req, res){
    return res.json({posts})
}