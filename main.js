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

//.......................................................................//
//    Radio output, Creates radio buttons based on selected sport        //
//                                                                       //
//    Radios allow you to select your favorite team                      //
//.......................................................................//


window.onload=function(){
      
    var radios = document.getElementsByName('sport');
    sports.addEventListener("click", function showteams() {
        var clickCount = 0;
        clickCount = clickCount + 1
        for (var i = 0, length = radios.length; i < length; i++){
            if (radios[i].checked){
                document.getElementById('radios[i].value')
                console.log(selection)
                var result = $('#result');
            result.empty();

  selection.innerHTML = "So you're a big " + radios[i].value + " fan, eh? What is your favorite team?"
  // only one radio can be logically checked, don't check the rest
  console.log(radios[i].value)
  if (radios[i].value == "baseball"){
        //console.log(teams[i].length)
        for(t = 0, teamLength = teams[i].length - clickCount; t < teamLength; t++) {
        //for(t = 0, teamLength = teams[i].length; t < teamLength; t++){
        //var result = $('#result');
        let $teamRadios = '<input type="radio" id="baseballTeam" value="' + teams[i][t] + '"name="team"><label for="baseballTeam" class="light">' + teams[i][t] + '</label><br>';        
        console.log(teams[i][t])
        result.append($teamRadios); 
        }
  } else if (radios[i].value == "basketball"){
    for(t = 0, teamLength = teams[i].length - clickCount; t < teamLength; t++) {
        // var result = $('#result');
        let $teamRadios = '<input type="radio" id="basketballTeam" value="' + teams[i][t] + '"name="team"><label for="baseballTeam" class="light">' + teams[i][t] + '</label><br>';
        console.log(teams[i][t])
        result.append($teamRadios); }
  } else if (radios[i].value == "football"){
    for(t = 0, teamLength = teams[i].length - clickCount; t < teamLength; t++) {
        //var result = $('#result');
        let $teamRadios = '<input type="radio" id="footballTeam" value="' + teams[i][t] + '"name="team"><label for="footballTeam" class="light">' + teams[i][t] + '</label><br>';
        //console.log(teams[i][t])
        console.log(teams[i][t])
        result.append($teamRadios); }
  } else if (radios[i].value == "hockey"){
    for(t = 0, teamLength = teams[i].length - clickCount; t < teamLength; t++) {
        //var result = $('#result');
        let $teamRadios = '<input type="radio" id="hockeyTeam" value="' + teams[i][t] + '"name="team"><label for="hockeyTeam" class="light">' + teams[i][t] + '</label><br>';
        console.log(teams[i][t])
        result.append($teamRadios); }
 } else console.log("No Array")
}}})
};


//.......................................//
// Below is the Array that containes     //
// All of the teams for the below sports //
// 0 is mlb                              //
// 1 is nba                              //
// 2 is nfl                              //
// 3 is nhl                              //
//.......................................//


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