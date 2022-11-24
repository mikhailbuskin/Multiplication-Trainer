<style>
  .app-container {
    margin-top: 15px; 
    padding: 20px; 
    box-shadow: 0 10px 16px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%) !important;
    border-radius: 7px;
  }
  .btn {
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    padding: 10px 15px;
    background-color: #007bff;
    border-color: #007bff;
    color: white;
    border-radius: 5px;
    font-size: larger;
    overflow: visible;
    transition: 0.3s;
    cursor: pointer;
  }
  .btn:hover {
    background-color: #3b9aff;
    border-color: #1988ff;
  }
  .field {
    font-size: 20px;
    width: 100px;
  }
  .problem {
    height:45px;
    display:inline-block; 
    width:320px;
  }
</style>
<script>
  import multiplication_charts from '../assets/multiplication_charts.jpg'

  let problems = []
  let buttonName = "Start";
  let status = "menu"; // menu, play, finish
  let successes = 0;
  let factsEnabled = {
    1 : false,
    2 : false,
    3 : true,
    4 : true,
    5 : true,
    6 : true,
    7 : true,
    8 : true,
    9 : true,
    10 : false
  }
  let facts = []

  function handleClick() { // changes status
    if (status == "menu") {
      problems = init();
      status = "play";
    }
    else if (status == "play") {
      status = "finish";
    }
    else if (status == "finish") {
      status = "menu";
    }
  }

  // function createFacts(factsEnabled) {
  //   var facts = [];
  //   for(let key in factsEnabled){
  //     if(factsEnabled[key] == true){
  //       facts.push(+key)
  //     }
  //   }
  //   return facts;
  // }

  function isSuccess(p) {
    return p.result == "" ? false : (p.n1 * p.n2) == +p.result;
  }

  function random(list){
    while (true) {
      let num = Math.floor(Math.random()*10)+1;
      if (factsEnabled[num]){
        return num;
      }
    }
  }
  //random();

  function init() {
    let answer = [];
    for(let i = 0; i < 50; i++) {
      answer.push( { n1:(random(facts)), n2:(random(facts)), result:"" } );
    }
    //console.log('answer', answer);
    return answer;
  }

  $: {
    if (status == "menu") { 
      buttonName = "Start"; 
    }
    if (status == "play") {
      buttonName = "Finish";
    }
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

<div class="app-container">

  {#if (status == "menu")}
  <div> <!-- menu -->
    <div>
      1 <input type="checkbox" bind:checked={factsEnabled["1"]}>
    </div>
    <div>
      2 <input type="checkbox" bind:checked={factsEnabled["2"]}>
    </div>
    <div>
      3 <input type="checkbox" bind:checked={factsEnabled["3"]}>
    </div>
    <div>
      4 <input type="checkbox" bind:checked={factsEnabled["4"]}>
    </div>
    <div>
      5 <input type="checkbox" bind:checked={factsEnabled["5"]}>
    </div>
    <div>
      6 <input type="checkbox" bind:checked={factsEnabled["6"]}>
    </div>
    <div>
      7 <input type="checkbox" bind:checked={factsEnabled["7"]}>
    </div>
    <div>
      8 <input type="checkbox" bind:checked={factsEnabled["8"]}>
    </div>
    <div>
      9 <input type="checkbox" bind:checked={factsEnabled["9"]}>
    </div>
    <div>
      10 <input type="checkbox" bind:checked={factsEnabled["10"]}>
    </div>
    <img style="" src={multiplication_charts} alt="Multiplication Table" width="565" height="565">
  </div>
  {/if}

  {#if (status == "play")}
  <div> <!-- game -->
    {#each problems as p}
    <div class="problem">
      <span style="font-size:18px">{p.n1} * {p.n2} = </span><input type="text" class="field" bind:value={p.result}>
    </div>
    {/each}
  </div>
  {/if}

  {#if (status == "finish")}
  <div> <!-- corrected game -->
    {#each problems as p}
    <div class="problem">
      <span style="font-size:18px">{p.n1} * {p.n2} = </span><input class="field" style="background-color: { isSuccess(p) ? "lightgreen" : "pink"}" bind:value={p.result}/> {isSuccess(p) ? "" :  "Correct: " + (p.n1 * p.n2)}
    </div>
    {/each}
  </div>

  <div style="margin-top:10px; font-size:30px">
    Score: {successes} / {problems.length}
  </div>

  {/if}

</div>