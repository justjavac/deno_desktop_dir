/** Returns the path to the user's desktop directory.
 *
 * The returned value depends on the operating system and is either a string,
 * containing a value from the following table, or `null`.
 * 
 * |Platform | Value                | Example                    |
 * | ------- | -------------------- | -------------------------- |
 * | Linux   | `XDG_DESKTOP_DIR`    | /home/justjavac/Desktop    |
 * | macOS   | `$HOME`/Desktop      | /Users/justjavac/Desktop   |
 * | Windows | `{FOLDERID_Desktop}` | C:\Users\justjavac\Desktop |
 */
export default function desktopDir(): string | null {
  switch (Deno.build.os) {
    case "linux": 
      return Deno.env.get("XDG_DESKTOP_DIR") ?? null;

    case "darwin": {
      const home = Deno.env.get("HOME");
      if (home) return `${home}/Desktop`;
      break;
    }

    case "windows":
      return Deno.env.get("FOLDERID_Desktop") ?? null;
  }

  return null;
}
