<script>

  let problems = []
  let number1 = 5;
  let operation = "*";
  let number2 = 2;
  let result = "";
  let visible = false;
  let buttonName = "Start";
  let status = "menu"; // menu, play, finish

  function handleClick() { // changes status
    if (status == "menu") {
      status = "play";
    }
    else if (status == "play") {
      status = "finish";
    }
    else if (status == "finish") {
      status = "menu";
    }
  }

  function calculate() {
    if (operation == "*") {
      return number1 * number2;
    }
    if (operation == "/") {
      return number1 / number2;
    }
  }

  function init() {
    problems.length = 0;
    for(let i = 0; i <= 10; i++) {
      problems.push();
    }
  }
  init();

  $: {
    if (status == "menu") { 
      buttonName = "Start"; 
      result = "";
      // number1 = Math.floor(Math.random() * 10);
      // number2 = Math.floor(Math.random() * 10)
    }
    if (status == "play") buttonName = "Finish";
    if (status == "finish") buttonName = "Reset";
  }
  $: visible = status != "menu"
  $: success = calculate() == +result;

</script>

<button id="button" on:click={handleClick}>
  {buttonName}
</button>

<div style="margin-top:7px">
  {#if (status == "menu")}
  <div> <!-- menu -->

  </div>
  {/if}

  {#if (status == "play")}
  <div> <!-- game -->
    {number1} * {number2} = <input type="text" bind:value={result}>
  </div>
  {/if}

  {#if (status == "finish")}
  <div> <!-- corrected game -->
    {number1} * {number2} = <input style="background-color: {success ? "lightgreen" : "red"}" bind:value={result} />
  </div>
  {/if}
</div>
  <!-- {#if (status == "finish")}
  <input type="text" bind:value={result} style={{backgroundColor: success ? "lightgreen":"pink"}} />
  {/if} -->

<!-- {#if (status == "play")}
<input type="text" bind:value={result} style={{backgroundColor: success ? "lightgreen":"pink"}} />
{/if}
{#if (status == "finish")}
<input type="text" bind:value={result} />
{/if} -->