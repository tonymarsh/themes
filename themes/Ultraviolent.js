BLACK = "#242728";
RED = "#ff0090";
GREEN = "#b6ff00";
YELLOW = "#fff727";
BLUE = "#47e0fb";
MAGENTA = "#d731ff";
CYAN = "#0effbb";
WHITE = "#e1e1e1";
BRIGHT_BLACK = "#636667";
BRIGHT_RED = "#fb58b4";
BRIGHT_GREEN = "#deff8c";
BRIGHT_YELLOW = "#ebe087";
BRIGHT_BLUE = "#7fecff";
BRIGHT_MAGENTA = "#e681ff";
BRIGHT_CYAN = "#69fcd3";
BRIGHT_WHITE = "#f9f9f5";
FOREGROUND = "#c1c1c1";
BACKGROUND = "#242728";
CURSOR = "rgba(193,193,193,1.0)";

t.prefs_.set("color-palette-overrides", [
  BLACK,
  RED,
  GREEN,
  YELLOW,
  BLUE,
  MAGENTA,
  CYAN,
  WHITE,
  BRIGHT_BLACK,
  BRIGHT_RED,
  BRIGHT_GREEN,
  BRIGHT_YELLOW,
  BRIGHT_BLUE,
  BRIGHT_MAGENTA,
  BRIGHT_CYAN,
  BRIGHT_WHITE,
]);
t.prefs_.set("foreground-color", FOREGROUND);
t.prefs_.set("background-color", BACKGROUND);
t.prefs_.set("cursor-color", CURSOR);
