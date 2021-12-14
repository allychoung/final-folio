import React from 'react';

const Poem5 = () => {
  return(

      <>
        <h1 className={'text-center mt-3'}>Poem-Program</h1>
        <div className={'row no-gutters m-0'}>
          <div className={'col-3'}></div>
          <div className={'col-6 mt-3'}>
            <h5>Source</h5>
            <p>
            My lively old corporal,<br/>
            What follies must you witness until<br/>
            That wry expression evaporates<br/>
            From beneath your eyes?<br/><br/>

            Must I tell another story,<br/>
            Another story, another story where<br/>
            I sprout then get beheaded,<br/>
            Head rolling down the rubble?&#8212;<br/><br/>

            Dear Proctor!<br/>
            When will it be over?<br/>
            I look to my hands, the fingers dwindle by the moment<br/>
            And I have yet to see dusk<br/><br/>

            I heard that life burgeons off the coast<br/>
            So let my corpse give way to the sea<br/>
            I want to hear the sound of the world twinkling underneath my ears<br/>
            Singing just for me<br/><br/>

            Dear Mother,<br/>
            I have done as you have told me to<br/>
            No field has been left unsown, left unendowed by my faith<br/>
            I think of this as a final parting to you<br/><br/>

            There is reason to see dishonesty behind my eyes<br/>
            And yet in this moment I see the truth, vulnerable and plain<br/>
            Truth is all I know, all that I can find<br/>
              I think of this as another story<br/><br/></p>

            <h5>Translation</h5>
            <code>
              class Musings &#123;<br/>
              &nbsp;&nbsp;o = new O([&#34;lively&#34;, &#34;old&#34;], type: ‘CORPORAL’);<br/>
              &nbsp;&nbsp;expressionWry = 1;<br/>
              &nbsp;&nbsp;iterator_follies = fetch(&#34;https://FOLLIES.xml&#34;);<br/>
              &nbsp;&nbsp;while (iterator_follies.hasNext()) &#123;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;response = o.witness_response(iterator_follies.node);<br/><br/>

              &nbsp;&nbsp;&nbsp;&nbsp;expressionWry = expressionWry || response.type.equals(‘DEER-IN-HEADLIGHTS’);<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;iterator_follies.next();<br/>
              &nbsp;&nbsp;}<br/><br/>

              &nbsp;&nbsp;if (expressionWry) &#123;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;throw new UnfathomableOutcome(&#34;Still wry as ever, old corporal!&#34;);<br/>
              &nbsp;&nbsp;}<br/><br/>
              &nbsp;&nbsp;while (!o.feelings.contains(‘satisfied’)) &#123;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;out.chant(&#34;I sprouted by way of %place&#34;, <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PLACES[new Random().nextInt(PLACES.length)]);<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;out.chant(&#34;I was beheaded in %circumstance&#34;, <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HAPPENINGS[new Random().nextInt(HAPPENINGS.length)]);<br/><br/>

              &nbsp;&nbsp;Patch rubbleStones;<br/>
              &nbsp;&nbsp;while(!rubbleStones.frictionHinders(i.acceleration)) &#123;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;i.position.x += cabbagePatch.slope.x;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;i.position.y += cabbagePatch.slope.y;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;i.position.d += cabbagePatch.slope.d;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;i.acceleration *= PhysicalConstants.G;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;time++;<br/>
              &nbsp;&nbsp;}<br/>

            }<br/><br/>



              class Administer &#123;<br/>
              &nbsp;&nbsp;judge = Judge(type: ‘PROCTOR’);<br/>
              &nbsp;&nbsp;this.implore(judge);<br/>
              &nbsp;&nbsp;while (fingers.length() != 0) &#123;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;fingers = fingers[0, n-1];<br/>
              &nbsp;&nbsp;}<br/><br/>

              &nbsp;&nbsp;if (this.inSea()) &#123;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;ensueVoices();<br/>
              &nbsp;&nbsp;}<br/>
            }<br/><br/>

              class Parting &#123;<br/>
              &nbsp;&nbsp;for (Field f : this.fields) &#123;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;sow-endow(f);<br/>

              &nbsp;&nbsp;}<br/><br/>
              &nbsp;&nbsp;mother.parting[-1] = this;<br/>
              &nbsp;&nbsp;truth;<br/>
              &nbsp;&nbsp;(Story) this;<br/>
            }<br/><br/><br/>


              </code>
          </div>
          <div className={'col-3'}></div>


        </div>

      </>
  )


}

export default Poem5;