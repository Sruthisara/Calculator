//<script language="JavaScript">
// Hide from old browsers


function pickimg(){
var imagenumber = 12;
var randomnumber = Math.random() ;
var rand1 = Math.round( (imagenumber-1) * randomnumber) + 1;
images = new Array
images[1] = "one.png"
images[2] = "two.png"
images[3] = "three.png"
images[4] = "four.png"
images[5] = "five.png"
images[6] = "six.jpg"
images[7] = "seven.jpg"
images[8] = "eight.jpg"
images[9] = "nine.jpg"
images[10] = "ten.jpg"
images[11] = "eleven.jpg"
images[12] = "twelve.jpg"
var image = images[rand1]
document.randimg.src = image
}
// -- End Hiding Here -->
//</script>


//<script type="text/javascript">
/*	var arr= new Array();
	arr.push("If someone with multiple personalities threatens to kill himself, is it murder or suicide?");
    arr.push("Does a reverse side also have a reverse side?");
	arr.push("Was learning cursive really necessary?");
	arr.push("I think part of a best friend's job should be to immediately dispose of your computer's history if you die.");
	arr.push("Nothing sucks more than that moment during an argument when you realize you're wrong");
	arr.push("What would happen if I hired 2 private investigators to follow each other?");
	arr.push("How is it that one careless match can start a forest fire, but it takes a whole box to start a campfire?");
	arr.push("If blind people wear sunglasses, why aren't deaf people wearing earmuffs?");
	arr.push("When I erase a word with a pencil, where does it go?");
	arr.push("Why do people look up when they think?");
	arr.push("If you have an open mind, is there a chance that your brain might fall out?");
	arr.push("Why do scientists call it 'research' when they are looking for something new?");
	arr.push("Why do bananas grow upward and all other fruits grow downward?");
	arr.push("Why doesn't Tarzan have a beard?");
	arr.push("How can someone draw a blank?");
	arr.push("Santa Claus has the right idea- visit people only once a year.");
	arr.push("I'll call it a 'Smart phone' the day I yell,'Where is my frigging phone?' and it answers 'Here I am, under your jacket!' ");
	arr.push("If people winked in real life as much as they did in text messages, this world would be a pretty creepy place");
	arr.push("DON'T GROW UP! ITS A TRAP! ");
	arr.push("'I'm sorry' and 'My bad' means the same thing... Unless you are at a funeral");
	arr.push("If Cinderella's shoes fit perfectly, why did it fall off in the first place?");
	arr.push("I chose the road less travelled. Now where the Hell am I?");
	arr.push("Exercise daily. Eat wisely.  Die anyway.");
	*/
	function rotate()
	{
	var num= Math.round(Math.random()*23);
	add(num);
	}

	function add(i)
	{2
	var chi = document.createTextNode(arr[i]);
	var tab1 = document.getElementById("add1");
		while(tab1.hasChildNodes())
		{
		 tab1.removeChild(tab1.firstChild);
		}
		
	tab1.appendChild(chi);
	pickimg();

//<a href="" onClick="pickimg();return false;"><IMG SRC="YOUR IMAGE" name="randimg" border=0></a>

	}
	
//</script>
