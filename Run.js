let amountr=23000;
let per=(amountr/1000000)*100;

document.getElementById("amtp").innerText=per;
document.getElementById("progressbarmy").style.width=per+"%";
document.getElementById("progressbarmy").innerText=per+"%";




document.addEventListener("DOMContentLoaded", function (event) {
    navActivePage();
    scrollRevelation('.reveal');
  });

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
let sharetext="Hello everyone, my name is Bishwambhar Modak, My mother, RINA MODAK, has been battling with her life since December 2021, after being diagnosed with Blood Cancer (Multiple Myeloma). My mother had been feeling pain in her waist very often. So, in August 2021, we took her to Tata Main Hospital for a checkup. The reports came out to be normal. As if the illness was playing hide&seek with us. After returning, her health started to deteriorate even more. In December 2021, we took her to Christian Medical College at Vellore, where Blood Cancer was detected. My father works as a Tubewell mechanic, I am studying at the Tagore Institute of Art and Education Private ITI, and also have an elder sister who is now married. We have already spent around Rs 5 Lakhs for her primary treatment & Chemotherapy. The doctors are saying that we still have to perform a Bone Marrow Transplant. Now we need to arrange Rs 10 Lakh & more for her upcoming treatment, which we are unable to afford any more. My family is on the verge of being penniless for the person who created the family. So, I Bishwambhar Modak earnestly request you to donate as much as you can for the treatment of my mother. Each of your contributions is a blessing to us. I can lose anything & everything but not my mother & you are the ones who can bring her back to me and my family. Your every contribution matters a lot to us. || GET MORE DETAILS:- https://heyatanu.github.io/hhand  ||  SUPPORT ME:- https://heyatanu.github.io/hhand/pay CONTACT INFO: NameL- Bishwambhar Modak || Phone Number:- +91 83488 18887 || Mail:- bumbamodak175@gmail.com";
let shareurl="https://heyatanu.github.io/hhand/";
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