// Json Connection Data

fetch("https://spreadsheets.google.com/feeds/cells/15y-jdHz6XG4gxm_OiHSDKjFq6snnf4lHQ-aFqHjwZX0/1/public/full?alt=json").then(

    res=>{
        res.json().then(
            data=>{
                x = 5;
                let date = data.feed.entry[x].gs$cell.$t;
                x++
                let titre = data.feed.entry[x].gs$cell.$t;
                x++
                let link = data.feed.entry[x].gs$cell.$t;

                

                document.getElementById("date").innerHTML = date;
                document.getElementById("titre").innerHTML = titre;
                document.getElementById("link").href = link;
            
            

        
            }
        )
    }
)

