using GLib;
using Gtk;
using WebKit;
using JSCore;

namespace Warung {	
	private const string TITLE = "Warung Aplikasi BlankOn";

	int main (string[] args) {
		Gtk.init (ref args);
		var webView = new Main ();
    var window = new Gtk.Window();

		window.add(webView);
		window.show_all ();
		window.resize(1200, 800);
		window.title = TITLE;
		window.window_position = WindowPosition.CENTER;
		try {
			window.icon = new Gdk.Pixbuf.from_file (Environment.get_current_dir() + "/public/favicon.ico");
		} catch (Error e) {
    	stderr.printf ("Could not load application icon: %s\n", e.message);
  	}
		window.destroy.connect(Gtk.main_quit);
		Gtk.main ();		
		return 0;
	}
}