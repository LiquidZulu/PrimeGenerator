//gen ANTI PrimeLists 20
console.log("\n\n/////////////////////////////////////////////////////////\n\n============= Prime Generator by LiquidZulu =============\n\nUsage: 'gen <ANTI/PRIME> FOLDER_NAME NUMBER_OF_PRIMES' \nwith no quotes and 'ANTI' to generate highly composite \nnumbers and 'PRIME' for regular primes. NOTE: do not \ninclude the <> in your input.\n\nThe folder structure will be as follows: \n/FOLDER_NAME/List of <Primes/Highly Compo...>/ then a \ntext file which will be titled in a way to indicate the\nnumber of primes/anti primes in the list.\n\n\nAlternatively you can find the factors of a number with:\n'factors NUMBER'\n\nI made this after inspiration from a Numberphile video on\nhighly composite numbers. You can read a blog post by \nBrady Haran on the topic here: http://www.antiprime.net/\n\n\n\nFind me here:\n\nMy website = http://LiquidZulu.000webhostapp.com/  \n(sleeps between 21:00 & 22:00 UTC unless I get more money)\n\nDiscord = https://discord.gg/k43XDQ2\n\nReddit = https://www.reddit.com/user/LiquidZulu/\n(I also mod for r/LasagnaCat on reddit)\n\ntwitter = @LiquidZulu\n\nYouTube (if I ever make anything) = https://goo.gl/fkgfiu\n\n/////////////////////////////////////////////////////////\n\n")

var listen = process.openStdin();

function d(n){
	
	factors = [];
	
	for(var i=0; i <= n; i++){
		if(0 == n % i){factors.push(i)}
	}
	
	return factors;
}

//gen <ANTI/PRIME> FOLDER_NAME NUMBER_OF_PRIMES

listen.addListener("data", function(input) {
	
	var input = input.toString().trim();
    console.log("Input: [" + input + "]");	
	var cmsg = input.split(' ');
	

		
	switch(cmsg[0]){
			
		case 'factors':
				  
			var caseType = 'factors';
			console.log('case: ' + caseType);
					  
				try {
					console.log('The factors/divisors of ' + cmsg[1] + ' are: ' + d(cmsg[1]));
				} 
						  
				catch (e) {
					console.error(e);
					message.channel.send('Error: '+e);
				}
				  
		break;
			  
	}

	
	if(cmsg[0].toLowerCase() == 'gen'){
	
		switch(cmsg[1]){
		
			case 'PRIME':
				  
				console.log('case: ' + cmsg[1]);
					  
					try {
						
						console.log(cmsg[3])

						var primes = [];
						
						var i = 0;
						var p = false;
						
						while(primes.length != cmsg[3]){

							if(d(i).length == 2){primes.push(i); p = true;} else{p = false}
							if(p == false){var msg = 'Testing ' + i;} else{var msg = 'Testing ' + i + '...TRUE';}
							console.log(msg + '______' + primes.length);

						i++	
						}
						
						fileContent = ''
						
						for(var i=0; i < primes.length; i++){
							if(i != primes.length-1){fileContent = fileContent + primes[i] + ','}else{fileContent = fileContent + primes[i]}
						}
						
						var dir = '/' + cmsg[2] + '/List of Primes/';
						
						var mkdirp = require('mkdirp');
						mkdirp(dir, function(err) {

							// path exists unless there was an error

						});
						
						
						var fs = require('fs');
						fs.writeFile(dir + primes.length + '__PRIMES.csv', fileContent, function(err) {
							if(err) {
								return console.log(err);
							}

							console.log('\nDone\n');
						}); 

					}
					
					catch (e) {
						console.error(e);
					}
				  
			break;
			
	
			case 'ANTI':
				
				console.log('case: ' + cmsg[1]);
					  
					try {
						
						console.log(cmsg[3])

						var antis = [];
						
						var i = 0;
						var HCN = false;
						
						prevHCN = 0;
						
						while(antis.length != cmsg[3]){

							if(d(i).length > d(prevHCN).length){antis.push(i); HCN = true; prevHCN = i;} else{HCN = false}
							if(HCN == false){var msg = 'Testing ' + i;} else{var msg = 'Testing ' + i + '...TRUE';}
							console.log(msg + '______' + antis.length);

						i++	
						}
						
						fileContent = ''
						
						for(var i=0; i < antis.length; i++){
							if(i != antis.length-1){fileContent = fileContent + antis[i] + ','}else{fileContent = fileContent + antis[i]}
						}
						
						var dir = '/' + cmsg[2] + '/List of Highly Composite Numbers/';
						
						var mkdirp = require('mkdirp');
						mkdirp(dir, function(err) {

							// path exists unless there was an error

						});
						
						
						var fs = require('fs');
						fs.writeFile(dir + antis.length + '__HCNS.csv', fileContent, function(err) {
							if(err) {
								return console.log(err);
							}

							console.log('\nDone\n');
						}); 
					} 
						  
					catch (e) {
						console.error(e);
					}
				
			break;
	

			
		}
	}else if(cmsg[0].toLowerCase() == 'factors'){
		
		try{
		console.log(d(cmsg[1]))}
		catch (e){
			console.error(e)
		}
	}
	
});