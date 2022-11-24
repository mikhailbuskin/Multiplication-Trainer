<script>
  let problems = []
  let buttonName = "Start";
  let status = "menu"; // menu, play, finish
  let successes = 0;

  function handleClick() { // changes status
    if (status == "menu") {
      status = "play";
    }
    else if (status == "play") {
      status = "finish";
    }
    else if (status == "finish") {
      status = "menu";
      //
      //alert(successes + " out of " + problems.length);
    }
  }

  function isSuccess(p) {
    return p.result == "" ? false : (p.n1 * p.n2) == +p.result;
  }

  function init() {
    let answer = [];
    for(let i = 0; i <= 5; i++) {
      answer.push( { n1:(Math.floor(Math.random() * 10)), n2:(Math.floor(Math.random() * 10)), result:"" } );
    }
    //console.log('answer', answer);
    return answer;
  }

  $: {
    if (status == "menu") { 
      buttonName = "Start"; 
      problems = init();
    }
    if (status == "play") buttonName = "Finish";
    if (status == "finish") {
      buttonName = "Reset";
      
      let count = 0;
      for (let p of problems) {
        if (isSuccess(p)) {
          count++;
        }
      }
      successes = count;
    }
  }

</script>

<button id="button" class="btn" on:click={handleClick}>
  {buttonName}
</button>

<div style="margin-top:7px" class="app-container">

  {#if (status == "menu")}
  <div> <!-- menu -->
    <!-- <img style="margin-left:auto; margin-right:auto" src={multiplication_charts} alt="Multiplication Table" width="565" height="565"> -->
  </div>
  {/if}

  {#if (status == "play")}
  <div> <!-- game -->
    {#each problems as p}
    <div style="margin-top:3px">
      {p.n1} * {p.n2} = <input type="text" class="field" bind:value={p.result}>
    </div>
    {/each}
  </div>
  {/if}

  {#if (status == "finish")}
  <div> <!-- corrected game -->
    {#each problems as p}
    <div style="margin-top:3px">
      {p.n1} * {p.n2} = <input class="form" style="background-color: { isSuccess(p) ? "lightgreen" : "pink"}" bind:value={p.result}/>
    </div>
    {/each}
  </div>

  <div style="margin-top:10px">
    Score: {successes} / {problems.length}
  </div>

  {/if}

</div>