module.exports.home = function(req , res){
 console.log(req.cookies);
  res.cookie('user_id',155);
//it render the view using our ejs view engion that is setup in index.js 

  return res.render('home',{
    title: "Home"
  });
  // return res.end('<h1>Express is up for Codeial!</h1>');
}

