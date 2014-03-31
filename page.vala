using GLib;
using Gtk;
using WebKit;
using JSCore;

namespace Warung {
	public class Main : WebKit.WebView {		
		public void * context { get; set; }
		public Main () 
		{
			var test = new App();
			load_uri ("file://" + Environment.get_current_dir() + "/belajar/index.html");
			window_object_cleared.connect ((frame, context) => {
			test.setup_js_class ((JSCore.GlobalContext) context);
			});
		}
	}
}