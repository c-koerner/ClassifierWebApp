//Classifier
const bayes = require('bayes')
const classifier = bayes();

const BILD = 'BILD';
const NOT_BILD = 'NOT_BILD'

// train the model
classifier.learn('Ter Stegen: „Ich habe nicht mehr Druck als sonst“', BILD)
classifier.learn('Schauspielerin Bella Thorne (22) ist frisch verliebt! Auf Instagram machte sie ihre neue Liebe jetzt öffentlich, indem sie ein Kuschelfoto von sich mit einer Frau postete.', BILD)
classifier.learn('Unter das Foto, auf dem das Gesicht ihrer neuen Freundin nicht zu sehen ist, schrieb der Hollywood-Star: „Sie ist sehr süß! Das erste Mädchen, das ich date, das Angst vor der Kamera hat.“', BILD)
classifier.learn('Trump kündigt an, US-Truppen aus Syrien zurückzuziehen. Im neunten Jahr des Syrienkriegs haben sich die Fronten im Land weitgehend stabilisiert. Genau das könnte sich nun ändern! Denn nach der Rückzugsankündigung von US-Präsident Donald Trump (73) werden Begehrlichkeiten verschiedener Parteien geweckt, diese Gebiete zu übernehmen.', BILD)
classifier.learn('Seine Ankündigung, die US-Truppen an der Grenze zwischen Syrien und der Türkei abzuziehen, hat gestern eine bisher nicht erlebte Welle der Kritik in der eigenen Partei ausgelöst.', BILD)
classifier.learn('Selbst seine beiden mächtigsten Alliierten im US-Senat haben seine Politik scharf attackiert. Diese würde Amerikas Führungsposition in der Welt schwächen und neben dem türkischen Präsidenten Recep Tayyip Erdogan (65) auch feindlichen Despoten und Regimen in die Hände spielen: Kreml-Chef Wladimir Putin (67), den Mullahs im Iran, Syriens Schlächter Bashar al-Assad (54) und der Terror-Miliz ISIS', BILD)
classifier.learn('Trump will aus „lächerlichen“ Kriegen aussteigen', BILD) 
classifier.learn('Kurz darauf verließen US-Konvois ihre grenznahen Basen und damit die Gegend, in der die Türkei eine „Sicherheitszone“ für zwei Millionen syrische Flüchtlinge einrichten will. Diese leben derzeit noch in der Türkei. Ob sie bald im Wüstengebiet Nordsyriens leben wollen, hat sie niemand gefragt', BILD)
classifier.learn('Der Fünffachmord von Kitzbühel – Andreas E. (25) erschoss am frühen Sonntagmorgen die Eltern seiner Ex-Freundin, ihren Bruder, danach seine Ex und ihren neuen Freund', BILD)
classifier.learn('Am Abend vor dem Massaker war er noch „Man of the Match“', BILD)
classifier.learn('Kitzbühel – Das Logo des Eishockey-Klubs Adler Kitzbühel ist eigentlich bunt. Doch wo noch bis vor Kurzem helle Farben leuchteten, ist jetzt nur noch Dunkelheit. Der Verein hat das Emblem auf Facebook schwarz gefärbt.', BILD)

classifier.learn('Unser Autor hatte eigentlich wenig übrig für „Fridays for Future“, bis eine Radiodiskussion ihn nachdenklich machte. Seither hat er sich wieder ernsthaft mit dem Thema Klimawandel beschäftigt und kam zu neuen Erkenntnissen – dank Greta.', NOT_BILD)
classifier.learn('Wie die meisten Geständnisse hat auch dieses eine Vorgeschichte. Vor Monaten wurde ich eingeladen, mit einer der Sprecherinnen von „Fridays for Future“ im Radio zu diskutieren. Da die Sendungsmacher wussten, dass ich eher skeptisch bin gegenüber moralisch hochfahrenden Bewegungen, sollte ich den Part des alten Grummlers spielen. Ich vertrat unter anderem die Position, dass man nicht auf Dauer gegen die Verkürzung der Schulzeit auf zwölf Jahre und dennoch der Meinung sein kann, freitags könne auf Dauer der Unterricht ruhig ausfallen.', NOT_BILD)
classifier.learn('Der Tübinger Oberbürgermeister Boris Palmer hat der schwedischen Klimaschutzaktivistin Greta Thunberg widersprochen. „Nein, wir haben Deine Jugend nicht zerstört“, schreibt der 47-jährige Grünen-Politiker an die 16-Jährige gerichtet in einem Gastbeitrag mit dem Titel „Liebe Greta, keine Panik!“ für die „Bild“-Zeitung.', NOT_BILD)
classifier.learn('Thunberg habe recht mit ihrem Eintreten für ein umweltbewussteres Handeln aller. „Aber dafür brauchen wir ein planvolles Vorgehen. Das ist nicht zu verwechseln mit Untätigkeit.“ Es nütze nichts, wenn wir in Panik verfallen, sagte er. Die 16-jährige Schwedin hingegen forderte schon öfter: „Ich will, dass ihr in Panik geratet.“', NOT_BILD)
classifier.learn('Fast heimlich kontert Greta Thunberg die Kritik von Wladimir Putin', NOT_BILD)
classifier.learn('Die Rede Boris Johnsons bei der ersten Sitzung im Parlament nach Aufhebung der Zwangspause am Mittwochabend schug hohe Wellen: Abgeordnete aller Parteien kritisierten seine Wortwahl und seine Anspielung auf die ermordete britische Politikerin Jo Cox, die für den Verbleib Großbritanniens in der Europäischen Union eingetreten war.', NOT_BILD)
classifier.learn('Welches Smartphone hat ein gutes Preis-Leistungs-Verhältnis? Welches Modell bleibt hinter den Erwartungen zurück? Im WELT-Dossier finden Sie alle unsere Produkttests und Rezensionen zu Modellen, die 2019 auf den Markt gekommen sind.', NOT_BILD)
classifier.learn('Die möglichen Gefahren, die von Handystrahlung ausgehen, sind nach wie vor nur schwer einzuschätzen. Wer auf Nummer sicher gehen möchte, kann sich für ein strahlungsarmes Smartphone entscheiden, bei Strahlenschutz-Produkten ist dagegen Vorsicht geboten.', NOT_BILD)
classifier.learn('Nach dem Lkw-Vorfall in Limburg geben die Sicherheitsbehörden neue Details bekannt: Der Fahrer lebt seit vier Jahren in Deutschland. Die Ermittlungen zum Motiv gingen weiterhin in alle Richtungen, hieß es.', NOT_BILD)
classifier.learn('Der Meinungsforscher Manfred Güllner sagt ein Verschwinden der SPD voraus. Er wirft ihr vor, die Mitte verloren zu haben und nur nach links zu schwenken. Der Forsa-Chef ist selbst seit 55 Jahren Mitglied der Partei.', NOT_BILD)
classifier.learn('Mehr als drei Milliarden Euro sind laut EU-Rechnungsprüfern im vergangenen Jahr fehlerhaft gezahlt worden. Häufige Ursache: zu komplexe Vorschriften. Es kristallisieren sich aber auch bestimmte Bereiche heraus, in denen es häufig passiert.', NOT_BILD)

function handleClassify(request, response) {
    var inputtext = request.body.inputtext;

    // 1. use classifier to classify "inputtext"
    var categorie = classifier.categorize(inputtext);
    var stateJson = classifier.toJson();
    // 2. save classify response to variable
    // 3. return classify response
    console.log('input text ist: ', inputtext)
    response.send(categorie);
}

this.handle = handleClassify;
