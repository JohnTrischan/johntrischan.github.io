//........................//
//    Create Date         //
//........................//

   var n = new Date();
   var y = n.getFullYear();
   var m = n.getMonth() + 1;
   var d = n.getDate();
   document.getElementById("date").innerHTML = m + "/" + d + "/" + y;

//........................//
//    Create Time         //
//........................//

    var t = new Date();
    var h = t.getHours();
    var m = t.getMinutes();
    if (h > 12 && m > 10) {
        document.getElementById("time").innerHTML = (h-12) + ":" + m + " pm";
    } else if (h > 12 && m < 10){
        document.getElementById("time").innerHTML = (h-12) + ":" + "0" + m + " pm";
    } else if (h <= 12 && m > 10){
        document.getElementById("time").innerHTML = h + ":" + m + " am";
    } else if (h <= 12 && m < 10){
        document.getElementById("time").innerHTML = h + ":" + "0" + m + " am";
    } else ("Something is horribly wrong")

   // var x = document.getElementById("sport");
    
   // document.getElementById("sport").innerHTML = x;

//........................//
//    Radio output        //
//........................//

   var radios = document.getElementsByName('sport');
   document.addEventListener("click", function() {
       
for (var i = 0, length = radios.length; i < length; i++)
{
 if (radios[i].checked)

 {
  // do whatever you want with the checked radio
  //alert(radios[i].value);f
  //var selection = radios[i].value
  document.getElementById('radios[i].value')
  console.log(selection)
  selection.innerHTML = "So you're a big " + radios[i].value + " fan, eh? What is your favorite team?"
  // only one radio can be logically checked, don't check the rest
  console.log(radios[i].value)
  if (radios[i].value == "baseball"){
//      console.log(teams[0]);
      console.log(teams[i].length)
      for(t = 0, teamLength = teams[i].length; t < teamLength; t++)
      {
      //    console.log(teams[i][t])}
      //document.getElementById("teamselector").innerHTML = teams[i][t]}
      document.getElementById('teamselector').appendChild(document.createTextNode(teams[i][t]).appendChild(document.createElement("br")));}
      //append child 
      //var x = document.createElement("input")
      //x.setAttribute("type", "radio");
  } else if (radios[i].value == "basketball"){
    console.log(teams[1]);
  } else if (radios[i].value == "football"){
    console.log(teams[2]);
  } else if (radios[i].value == "hockey"){
    console.log(teams[3]);
 } else console.log("No Array")
}}})


// 0 is mlb
// 1 is nba
// 2 is nfl
// 4 is nhl



var teams = [
    [
    'Arizona Diamondbacks',
    'Atlanta Braves',
    'Baltimore Orioles',
    'Boston Red Sox',
    'Chicago Cubs',
    'Chicago White Sox',
    'Cincinnati Reds',
    'Cleveland Indians',
    'Colorado Rockies',
    'Detroit Tigers',
    'Miami Marlins',
    'Houston Astros',
    'Kansas City Royals',
    'Los Angeles Angels of Anaheim',
    'Los Angeles Dodgers',
    'Milwaukee Brewers',
    'Minnesota Twins',
    'New York Mets',
    'New York Yankees',
    'Oakland Athletics',
    'Philadelphia Phillies',
    'Pittsburgh Pirates',
    'Saint (St.) Louis Cardinals',
    'San Diego Padres',
    'San Francisco Giants',
    'Seattle Mariners',
    'Tampa Bay Rays',
    'Texas Rangers',
    'Toronto Blue Jays',
    'Washington Nationals'
    ],
    [
    'Atlanta Hawks',
    'Boston Celtics',
    'Charlotte Bobcats',
    'Chicago Bulls',
    'Cleveland Cavaliers',
    'Dallas Mavericks',
    'Denver Nuggets',
    'Detroit Pistons',
    'Golden State Warriors',
    'Houston Rockets',
    'Indiana Pacers',
    'LA Clippers',
    'LA Lakers',
    'Memphis Grizzlies',
    'Miami Heat',
    'Milwaukee Bucks',
    'Minnesota Timberwolves',
    'New Jersey Nets',
    'New Orleans Hornets',
    'New York Knicks',
    'Oklahoma City Thunder',
    'Orlando Magic',
    'Philadelphia Sixers',
    'Phoenix Suns',
    'Portland Trail Blazers',
    'Sacramento Kings',
    'San Antonio Spurs',
    'Toronto Raptors',
    'Utah Jazz',
    'Washington Wizards'
    ],
    [
    'Arizona Cardinals', 
    'Atlanta Falcons',
    'Baltimore Ravens',
    'Buffalo Bills',
    'Carolina Panthers',
    'Chicago Bears',
    'Cincinnati Bengals',
    'Cleveland Browns',
    'Dallas Cowboys',
    'Denver Broncos',
    'Detroit Lions',
    'Green Bay Packers',
    'Houston Texans',
    'Indianapolis Colts',
    'Jacksonville Jaguars',
    'Kansas City Chiefs',
    'Los Angeles Chargers',
    'Los Angeles Rams',
    'Miami Dolphins',
    'Minnesota Vikings',
    'New England Patriots',
    'New Orleans Saints',
    'New York Giants',
    'New York Jets',
    'Oakland Raiders',
    'Philadelphia Eagles',
    'Pittsburgh Steelers',
    'San Francisco 49ers',
    'Seattle Seahawks',
    'Tampa Bay Buccaneers',
    'Tennessee Titans',
    'Washington Redskins'
    ],
    [
    'Anaheim Ducks',
    'Arizona Coyotes',
    'Boston Bruins',
    'Buffalo Sabres',
    'Calgary Flames',
    'Carolina Hurricanes',
    'Chicago Blackhawks',
    'Colorado Avalanche',
    'Columbus Blue Jackets',
    'Dallas Stars',
    'Detroit Red Wings',
    'Edmonton Oilers',
    'Florida Panthers',
    'Los Angeles Kings',
    'Minnesota Wild',
    'Montreal Canadiens',
    'Nashville Predators',
    'New Jersey Devils',
    'New York Islanders',
    'New York Rangers',
    'Ottawa Senators',
    'Philadelphia Flyers',
    'Pittsburgh Penguins',
    'San Jose Sharks',
    'St. Louis Blues',
    'Tampa Bay Lightning',
    'Toronto Maple Leafs',
    'Vancouver Canucks',
    'Vegas Golden Knights',
    'Washington Capitals',
    'Winnipeg Jets'
     ] ];
  