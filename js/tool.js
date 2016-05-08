// Sets the criteria to variables
  function TwitterTool(name,cost,corefunctions,easeofuse,userinterface,customersupport,
  contentcreation, termsandconditions, securityethics, mobileintegration, page){
  this.name=name;
  this.cost=cost; 
  this.corefunctions=corefunctions; 
  this.easeofuse=easeofuse; 
  this.userinterface=userinterface; 
  this.customersupport=customersupport; 
  this.contentcreation=contentcreation; 
  this.termsandconditions=termsandconditions; 
  this.securityethics=securityethics; 
  this.mobileintegration=mobileintegration; 
  this.total=0;
  this.page=page;
  }
  
  // Establishes the criteria for each tool
  toolArray = 
  [
  new TwitterTool("Twitter Analytics",5,3,3,3,1,2,1,2,5,"twitteranalytics"), 
  new TwitterTool("Tweechup",5,4,3,5,4,2,1,1,4,"tweechup"), 
  new TwitterTool("Analyze Words",4,2,4,2,2,3,3,5,2,"analyzewords"),
  new TwitterTool("Twitter Counter",3,4,3,3,2,4,4,4,5,"twittercounter"),
  new TwitterTool("Twitonomy",2,4,4,3,3,4,3,3,3,"twitonomy"),
  new TwitterTool("TweepsMap",3,5,5,5,4,4,4,3,5,"tweepsmap"),
  new TwitterTool("TweetReach",3,4,5,5,3,3,5,4,2,"tweetreach"),
  new TwitterTool("Followerwonk",2,4,5,5,2,4,4,3,2,"followerwonk")
  ]
  
  // Creates an array of the weightings
  weightings = [20,15,11,9,7,5,3,2,1];
  
  $(function() {
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();

  $("button").click(function (){

  	$(".results p").show();
    // Reset values
    for (var i = 0; i < toolArray.length; i++){
      toolArray[i].total = 0;
    }

    // loop over the list elements
    for (var rank = 0; rank < weightings.length; rank++){
      //get the 'rank-th' element in the list (which has been ordered by the user)

      //get each tool from the array of tools
      for (var i = 0; i < toolArray.length; i++) {
        //the current class of the 'rank-th' element should be the name of the criteria and can be used to get that criteria's rating from the current tool

        currentClass = $(".ui-sortable li:eq("+rank+")").attr("class").split(" ")[0];

        //increase the tools total score by tool's rating multiplied by the ranking 
        toolArray[i].total = toolArray[i].total + toolArray[i][currentClass] * weightings[rank];
      }
    }
    finalResult() //======================this is the final result for printing in <ul>
    console.table(finalResult())
   });

   //Do the criteria one by one
    function finalResult(){
      //[calculatetwitonomy(), calculateTwitalyzer(), calculateTwitzer()] //========add the other calc functions
      var totals = toolArray; 
      sort(totals,"total");
      $(".results ol").empty();
      for (var i = 0; i < totals.length; i++) {
        $(".results ol").append("<li><a target=\"_blank\" href=\""+totals[i].page+".html\">"+totals[i].name+"</a></li>");
      }
      return totals;
    }

    //function for sorting strings from the database alphabetically
    function sort(toSort,attr){
      toSort.sort(function Sort(a,b){
      if (a[attr]<b[attr]){return 1;}
      if (a[attr]>b[attr]){return -1;}
      return 0;
      })
    }
   });