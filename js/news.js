/* news json object */
let news = [
{
	"title": "Leslieville Farmers' Market",
	"location": "Oct 11, Jonathon Ashbridge Park",
	"image": "images/news/market.jpg",
	"description": "A celebration of food every Sunday in the park! Leslieville Farmers' Market features farm-fresh groceries, diverse dishes to explore, live music, and children's activities"
},
{
	"title": "Toronto's Big Business, Tech & Entrepreneur Professional Networking Soriee",
	"location": "Oct 19, Midtown Gastro Hub",
	"image": "images/news/business.jpeg",
	"description": "Are you looking for co-founders, partners, coaches or core team members for your start-up? Please join us for an evening of creativity, inspiration and passionate conversations."
},
{
	"title": "Passenger Concert",
	"location": "Nov 3, The Phoenix Concert Theatre",
	"image": "images/news/passenger.jpg",
	"description": "Mike Rosenberg, known better as Passenger, is a British singer/songwriter quickly impacting the folk-rock scene with his earnest and introspective lyrics. Passenger was formerly a band fronted by Rosenberg that released a number of albums before the band members parted ways. Rosenberg continued with the name, and his latest release, All the Little Lights, is a folk-rock, indie-pop album filled with songs of loss, love, and hope. "
},
{
	"title": "The Weeknd Concert",
	"location": "Nov 25, The Phoenix Concert Theatre in Toronto, Canada",
	"image": "images/news/theweeknd.jpg",
	"description": "On tour, Tesfaye re-creates his recorded music with the help of some live backing musicians and usually can be counted on to bring an eye-popping light show. Fans consistently give Tesfaye kudos for the quality and depth of his live vocals. The Weeknd seems a natural onstage, even when the stages he's playing are huge. Hard to believe that his 2013 album, Kiss Land, was just his second."
},
]

/* dynamically loading the news on the html page from the news object */
let loadNews = () => {	
	let html = "";
	for(let i=0; i<Object.keys(news).length; i++) {
		html += '<article class="hvr-outline-out even">'
		html += '<h2 class="title">'+news[i].title+'</h2>'
		html += '<h3 class="description">'+news[i].location+'</h3>'
		html += '<img src="'+news[i].image+'" alt="market" width="350px" height="250px" class="short_images">' 
		html += '<p>'+news[i].description+'</p>'
		html += '</article>'
	}
	$(".articles").html(html);
}

loadNews();
