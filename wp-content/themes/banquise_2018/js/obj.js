$(document).ready(function() {

    $("#obj01").addClass("bold");
    $(".object").append();
    
var element = document.getElementById('obj01');
    element.addEventListener('click', function() {
        $(".object").attr('src', "./model.html");
        $("#obj01").addClass("bold");
        $("#obj02").removeClass("bold");
        $('.articleobjtitle').text('Quelle qu’en soit la forme');
        $('.art01').text('L’édition graphique retrouve tout son sens : produire et faire apparaître au grand jour un document, et le rendre accessible, compréhensible, exploitable et sûr. La connaissance typographique, l’art de la mise en page, la maîtrise des volumes, la conception d’éléments originaux, sont ainsi mis au service d’un projet et de ceux qui le conduisent.');
        $('.art02').text('L’apprentissage et la solidarité sont les principes premiers');
        $('.art03').text('Nous savons que chez les alcidés, l’esprit de famille domine au sein d’une société hiérarchisée, où l’état de responsable ne donne que le privilège de s’exposer le premier. A travers Bleu Banquise, le manchot peut ainsi devenir pingouin et apprendre à voler…');
        troisd();
        deuxd();
    });
    
var element = document.getElementById('obj02');
    element.addEventListener('click', function() {
        $(".object").attr('src', "./model2.html");
        $("#obj02").addClass("bold");
        $("#obj01").removeClass("bold");
        $('.articleobjtitle').text('la créativité et les technologies');
        $('.art01').text('La combinaison de la créativité et des technologies');
        $('.art02').text('Au cœur de l’atelier, les richesses individuelles et le partages des savoirs, assurent au quotidien un environnement dynamique où l’esprit et la fantaisie s’invitent dans une émulation sans cesse renouvelée.');
        $('.art03').text('Aenean et nisi non ipsum scelerisque gravida sed in urna. Sed dignissim odio vel risus fringilla euismod. Curabitur fringilla nunc eu sagittis hendrerit. Cras blandit, tortor sollicitudin pharetra ultrices, augue elit fermentum arcu, ac efficitur purus enim eu nisi. ');
    });
    
    function troisd() {
        console.log('changement en 3D');
    }
    
    function deuxd() {
        console.log('changement en 2D');
    }

    });