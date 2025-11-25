import React from 'react';
import { bibliography } from '../assets/texts';
import ReactMarkdown from "react-markdown";
import '../index.css'

export default function Bibliography() {
  return (
    <div
      style={{
        // position: 'relative',
        // minHeight: '100vh',
        // padding: '2rem',
        // maxWidth: '1000px',
        // margin: '0 auto',
        // fontSize: '1rem',
        // lineHeight: '1.6',
        // whiteSpace: 'pre-wrap', // keeps line breaks
        // wordWrap: 'break-word',
        // color: '#fff', // make sure text is visible
      }}
    >
      <main style={{ position: "relative", zIndex: 1, color: "#fff", padding: 24 }}>
              <section id="learn-more" style={{ paddingTop: 40 }}>
                <h2>Bibliography</h2>
  <div className="csl-bib-body" style={{
    fontFamily: '"Times New Roman", Times, serif',
    fontSize: "12pt",
    lineHeight: 2,
    marginLeft: "1in",
    marginRight: "1in"
  }}>
  <div className="csl-entry">admin. “Jon Rafman - You Are Standing in an Open Field.” <i>New Art Editions</i>, 17 Dec. 2019, https://www.newarteditions.com/jon-rafman-you-are-standing-in-an-open-field/.</div>
  <div className="csl-entry">Britannica Editors. “Huangdi.” <i>Encyclopedia Britannica</i>, 13 May 2025, https://www.britannica.com/topic/Huangdi.</div>
  <div className="csl-entry">“Chinese Mythology 101: Four Symbols.” <i>Localiiz</i>, https://www.localiiz.com/post/culture-local-stories-chinese-mythology-101-four-symbols. Accessed 24 Nov. 2025.</div>
  <div className="csl-entry">“Chinese Xian History, Beliefs &amp; Significance.” <i>Study.Com</i>, https://study.com/academy/lesson/chinese-xian-history-beliefs-culture.html. Accessed 24 Nov. 2025.</div>
  <div className="csl-entry">Cooksey, Celia. “Melancholy in the Art of Introspection.” <i>ELYSIAN Magazine</i>, 18 Aug. 2023, https://readelysian.com/melancholy-in-art-of-introspection/.</div>
  <div className="csl-entry">deheunit17. “Perspective in Chinese Painting | Research against Western Styles.” <i>UNIT 17_DE HE</i>, 25 Oct. 2016, https://deheunit17.wordpress.com/2016/10/25/perspective-in-chinese-painting-research-against-western-styles/.</div>
  <div className="csl-entry">Fact. “Fact Focus: Jon Rafman.” <i>Fact Magazine</i>, 2 Feb. 2023, https://www.factmag.com/2023/02/02/jon-rafman-fact-focus/.</div>
  <div className="csl-entry">“Learn More about China’s Mythical 3 Sovereigns and 5 Emperors.” <i>ThoughtCo</i>, https://www.thoughtco.com/chinas-three-sovereigns-and-five-emperors-195258. Accessed 24 Nov. 2025.</div>
  <div className="csl-entry"><i>Masks</i>. https://noh.stanford.edu/staging/masks/#:~:text=Ai%2Dky%C5%8Dgen%20Mask:%20’Noborihige’%20Ky%C5%8Dgen%20masks%20tend%20to,’raising%20beard’%2C%20referring%20to%20its%20bristling%2Dup%20sideburns. Accessed 24 Nov. 2025.</div>
  <div className="csl-entry">“Paul Romano.” <i>PAUL ROMANO</i>, https://www.workhardened.com. Accessed 24 Nov. 2025.</div>
  <div className="csl-entry">“Published Work.” <i>Mark-Cooper-Art</i>, https://www.markcooperart.com/published. Accessed 24 Nov. 2025.</div>
  <div className="csl-entry">Recinos, Alec. “Towards a Postinternet Sublime.” <i>Rhizome</i>, 4 Jan. 2018, p. 1, https://rhizome.org/editorial/2018/jan/04/towards-a-post-internet-sublime/.</div>
  <div className="csl-entry">Tal, Guy. “The Gestural Language in Francisco Goya’s <i>Sleep of Reason Produces Monsters</i>.” <i>Word &amp; Image</i>, vol. 26, no. 2, Mar. 2010, pp. 115–27. <i>DOI.org (Crossref)</i>, https://doi.org/10.1080/02666280902843647.</div>
  <div className="csl-entry">Theobald, Ulrich. <i>Tian 天, Heaven(Www. Chinaknowledge. De)</i>. http://www.chinaknowledge.de/History/Myth/personsheaven.html#:~:text=%22Heaven%22%20(tian%20%E5%A4%A9),the%20necessary%20feeling%20of%20responsibility. Accessed 24 Nov. 2025.</div>
  <div className="csl-entry">Watson, Stephen. “Balenciaga Taps Artist Jon Rafman to Reimagine Paris Fashion Show.” <i>SURFACE</i>, 9 Oct. 2018, https://www.surfacemag.com/articles/balenciaga-paris-fashion-show-demna-gvasalia-and-artist-jon-rafman/.</div>
  <div className="csl-entry"><i>Wuxing (Wu-Hsing) | Internet Encyclopedia of Philosophy</i>. https://iep.utm.edu/wuxing/. Accessed 24 Nov. 2025.</div>
  <div className="csl-entry"><i>Xi’an Huangdi Mausoleum, the Mausoleum for the First Chinese Progenitor</i>. https://www.chinahighlights.com/xian/attraction/huangdi-mausoleum.htm. Accessed 24 Nov. 2025.</div>
  <div className="csl-entry">https://ackland.emuseum.com/objects/19271/emperor-riding-to-heaven-on-a-dragon?ctx=1bc3170af738fd2c2a52bc9ed85c087e94ac1ed7&amp;idx=10. Accessed 24 Nov. 2025.</div>
</div>
                {/* <p style={{ maxWidth: 720 }}>
                  {bibliography.split('\n').map((line, i) => (
                    <ReactMarkdown key={i}>{line}</ReactMarkdown>
                  ))} */}
                {/* </p> */}
              </section>
            </main>
    </div>
  );
}