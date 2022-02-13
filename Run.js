let amountr = 23000;
let per = (amountr / 1000000) * 100;

document.getElementById("amt").innerText = amountr;
document.getElementById("amtp").innerText = per;
document.getElementById("progressbarmy").style.width = per + "%";
// document.getElementById("progressbarmy").innerText=per+"%";




function copyacn() {
	var copyText = document.getElementById("acn");

	copyText.select();
	copyText.setSelectionRange(0, 99999); /* For mobile devices */

	navigator.clipboard.writeText(copyText.value);

	alert("Account number code copied");
}

function copyifsc() {
	var copyText = document.getElementById("ifsc");
	copyText.select();
	copyText.setSelectionRange(0, 99999); /* For mobile devices */

	navigator.clipboard.writeText(copyText.value);

	alert("IFSC code copied");
}
let sharetext = "Hello everyone, my name is Bishwambhar Modak, My mother, RINA MODAK, has been battling with her life since December 2021, after being diagnosed with Blood Cancer (Multiple Myeloma). We have already spent around Rs 5 Lakhs for her primary treatment & Chemotherapy. The doctors are saying that we still have to perform a Bone Marrow Transplant. Now we need to arrange Rs 10 Lakh & more for her upcoming treatment, which we are unable to afford any more. Your every contribution matters a lot to us. || GET MORE DETAILS:- https://heyatanu.github.io/hhand  ||  SUPPORT ME:- https://heyatanu.github.io/hhand/pay CONTACT INFO: NameL- Bishwambhar Modak || Phone Number:- +91 83488 18887 || Mail:- bumbamodak175@gmail.com";
let shareurl = "https://heyatanu.github.io/hhand/";

function sharelinkfun() {
	if (navigator.share) {
		navigator.share({
				title: 'Hhand Support',
				text: sharetext,
				url: shareurl
			}).then(() => {
				// console.log('Thanks for sharing!');
			})
			.catch(err => {
				console.log(`Couldn't share because of some error`);
			});
	} else {
		console.log('Web share not supported');
	}

}