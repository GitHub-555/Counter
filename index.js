$(".d").click(function () {
  var dcounterValue = $("h1").text();
  --dcounterValue;
  $("h1").text(dcounterValue);
});

$(".i").click(function () {
  var icounterValue = $("h1").text();
  ++icounterValue;
  $("h1").text(icounterValue);
});

$(".r").click(function () {
  $("h1").text("0");
});
