var ecran = document.getElementById('ipTirage');
var precedent= document.getElementById('prec');
var compteur= document.getElementById('compteur');
var chiffres=document.getElementsByTagName('button');
var TitreTirage= document.getElementById('tirageTitre');
var AfficheCompteur= document.getElementById('compt');
var AfficheTirage= document.getElementById('fondTirage');
var AffichePrec= document.getElementById('precedent');
var BtnLancer= document.getElementById('lancement');
var TitreChoisir= document.getElementById('choisir');
var BtnRejouer= document.getElementById('DivBtnReJouer');
var carte= document.getElementById('carte');
var incrBtn= 0;
var tirage;
var i=0;
var j=0;
var k=0;
var compt=0;
var score=0;
let scores=[];
let tabTir = [];
let tabChiffre = [];
ecran.value='';
precedent.value='';
compteur.value='';
AfficheCompteur.style.display='none';
AfficheTirage.style.display= 'none';
AffichePrec.style.display= 'none';
TitreTirage.style.display= 'none';
BtnLancer.style.display='none';
TitreChoisir.style.display= 'none';
BtnRejouer.style.display= 'none';
for(var n=0; n<chiffres.length; n++){
	if(chiffres[n].value !== 'jouer' && chiffres[n].value !=='rejouer'){
		chiffres[n].setAttribute('disabled','disabled');
	}	
}
var logo=document.createElement('img');
logo.src='img/loto.png';
logo.style.display='block';
logo.style.width='300px';
logo.style.marginTop='100px';
logo.style.marginLeft='auto';
logo.style.marginRight='auto';
logo.style.paddingBottom='50px';
document.getElementsByTagName('div') [2].prepend(logo); 

function jeu(groupe , valeur){

	switch(groupe){
		case('jouer'):

			logo.style.display='none';
			BtnRejouer.style.display= 'none';
			for(var n=0; n<chiffres.length; n++){
					chiffres[n].removeAttribute('disabled');		
			}
			for(var p=0; p<chiffres.length; p++){
				if(chiffres[p].value== 'jouer'){
					chiffres[p].style.display='none';		
				}
			}			
			TitreChoisir.style.marginTop='250px';
			TitreChoisir.style.display='block';
			TitreChoisir.style.textAlign='center';	
		break;

		case('chiffre'):

			for(var l=0; l<chiffres.length; l++){	
					if(chiffres[l].value == valeur){
						if(tabChiffre.indexOf(valeur) == -1){
							if(incrBtn<5){
								tabChiffre.push(valeur);
								chiffres[l].style.backgroundColor= 'blue';
								incrBtn=incrBtn+1;
								if(incrBtn == 5){
									BtnLancer.style.display='block';
									BtnLancer.style.visibility='visible';
									BtnLancer.style.marginTop='230px';
									TitreChoisir.style.display= 'none';
								}							
							}		
						}	
						else {
							var index= tabChiffre.indexOf(valeur);
							if(incrBtn<5 || incrBtn==5){
								tabChiffre.splice(index, 1);
								chiffres[l].style.backgroundColor= '';
								incrBtn=incrBtn-1;
								BtnLancer.style.visibility='hidden';
							} 						
						}					
					}				
			}
		break;

		case('lancement'):
				for(var n=0; n<chiffres.length; n++){
					if(chiffres[n].value !=='rejouer'){
						chiffres[n].setAttribute('disabled','disabled');
					}	
				}
			AfficheCompteur.style.display='block';
			AfficheTirage.style.display= 'block';
			AffichePrec.style.display= 'block';
			TitreTirage.style.display= 'block';
			TitreChoisir.style.display= 'none';
			BtnLancer.style.display='none';
			carte.style.marginTop='50px';
			for(i=0; i<15; i++){
				do {
					tirage = 1+Math.floor(Math.random()*(40-1+1));

				}while (tabTir.indexOf(tirage) !== -1);
						tabTir.push(tirage);	
			}	

			var intervalScore= setInterval(function(){
				compt=compt+1; 
				if(j < 15){
					ecran.value=tabTir[j];
					compteur.value = compt;	
					for(k=0; k<tabChiffre.length; k++){
						if(tabChiffre[k] == ecran.value){
							for(var m=0; m<chiffres.length; m++){
								var trouvé=tabChiffre[k];
								if(chiffres[m].value == trouvé){
									score= score + 1;
									scores.push(score);
									console.log(scores);
									chiffres[m].style.backgroundColor='green';
								}
							}
						}
					}
					var AffichePrec= ecran.value;
					j=j+1;
						setTimeout(function(){
								if(compt <=15){
									precedent.value +=''+ AffichePrec +''+ '-';
								} else if(compt == 16){
									precedent.value += AffichePrec;
								}				 
						}, 2000);
				}			
			}, 2000);
				var intervalScore=setInterval(function(){
						if(compteur.value == 15){
							clearInterval(intervalScore);
							AfficheCompteur.style.display='none';
							AfficheTirage.style.display= 'none';
							TitreTirage.style.display= 'none';
							BtnRejouer.style.display= 'block';
								if(scores.length ==1) {
									
									var UnChiffre=document.createElement('img');
									UnChiffre.src='img/1Chiffre.png';
									UnChiffre.style.display='block';
									UnChiffre.style.width='300px';
									UnChiffre.style.marginTop='100px';
									UnChiffre.style.marginLeft='auto';
									UnChiffre.style.marginRight='auto';
									UnChiffre.style.paddingBottom='50px';
									document.getElementsByTagName('div') [2].prepend(UnChiffre); 
									
								} 	
								if(scores.length == 2){
									var DeuxChiffres=document.createElement('img');
									DeuxChiffres.src='img/2Chiffres.png';
									DeuxChiffres.style.display='block';
									DeuxChiffres.style.width='300px';
									DeuxChiffres.style.marginTop='100px';
									DeuxChiffres.style.marginLeft='auto';
									DeuxChiffres.style.marginRight='auto';
									DeuxChiffres.style.paddingBottom='50px';
									document.getElementsByTagName('div') [2].prepend(DeuxChiffres);
								}
								if(scores.length == 3){
									
									var TroisChiffres=document.createElement('img');
									TroisChiffres.src='img/3Chiffres.png';
									TroisChiffres.style.display='block';
									TroisChiffres.style.width='300px';
									TroisChiffres.style.marginTop='100px';
									TroisChiffres.style.marginLeft='auto';
									TroisChiffres.style.marginRight='auto';
									TroisChiffres.style.paddingBottom='50px';
									document.getElementsByTagName('div') [2].prepend(TroisChiffres);
								} 
								if(scores.length == 4){
									
									var QuatreChiffres=document.createElement('img');
									QuatreChiffres.src='img/4Chiffres.png';
									QuatreChiffres.style.display='block';
									QuatreChiffres.style.width='300px';
									QuatreChiffres.style.marginTop='100px';
									QuatreChiffres.style.marginLeft='auto';
									QuatreChiffres.style.marginRight='auto';
									QuatreChiffres.style.paddingBottom='50px';
									document.getElementsByTagName('div') [2].prepend(QuatreChiffres);
								} 
								if(scores.length == 5){
									
									var CinqChiffres=document.createElement('img');
									CinqChiffres.src='img/5Chiffres.png';
									CinqChiffres.style.display='block';
									CinqChiffres.style.width='300px';
									CinqChiffres.style.marginTop='100px';
									CinqChiffres.style.marginLeft='auto';
									CinqChiffres.style.marginRight='auto';
									CinqChiffres.style.paddingBottom='50px';
									document.getElementsByTagName('div') [2].prepend(CinqChiffres);
								} 
								if(scores.length == ''){
									
									var rien=document.createElement('img');
									rien.src='img/rien.png';
									rien.style.display='block';
									rien.style.width='300px';
									rien.style.marginTop='100px';
									rien.style.marginLeft='auto';
									rien.style.marginRight='auto';
									rien.style.paddingBottom='50px';
									document.getElementsByTagName('div') [2].prepend(rien);
								}
						}
						
					}, 5000);
				
		break;
		case 'rejouer':
			location.reload();
		break;

	}




}


			
			
	