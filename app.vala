using GLib;
using Gtk;
using WebKit;
using JSCore;

namespace Warung {

	public class App : GLib.Object {
		
		// Functions

		public static JSCore.Value repougm (Context ctx,
		JSCore.Object function,
		JSCore.Object thisObject,
		JSCore.Value[] arguments,
		out JSCore.Value exception) {

			exception = null;
			//its need root previlage
			try {
				Process.spawn_command_line_sync ("sudo sh "+Environment.get_current_dir()+"/belajar/lib/echougm");
			} catch (SpawnError e) {
				stdout.printf ("Error: %s\n", e.message);
			}
			return new JSCore.Value.undefined (ctx);
		}

		public static JSCore.Value repokambing (Context ctx,
		JSCore.Object function,
		JSCore.Object thisObject,
		JSCore.Value[] arguments,
		out JSCore.Value exception) {

			exception = null;
			//its need root previlage
			try {
				Process.spawn_command_line_sync ("sudo sh "+Environment.get_current_dir()+"/belajar/lib/echokambing");
			} catch (SpawnError e) {
				stdout.printf ("Error: %s\n", e.message);
			}
			return new JSCore.Value.undefined (ctx);
		}

		public static JSCore.Value repoarsip (Context ctx,
		JSCore.Object function,
		JSCore.Object thisObject,
		JSCore.Value[] arguments,
		out JSCore.Value exception) {

			exception = null;
			//its need root previlage
			try {
				Process.spawn_command_line_sync ("sudo sh "+Environment.get_current_dir()+"/belajar/lib/echoarsip");
			} catch (SpawnError e) {
				stdout.printf ("Error: %s\n", e.message);
			}
			return new JSCore.Value.undefined (ctx);
		}

		public static JSCore.Value update (Context ctx,
		JSCore.Object function,
		JSCore.Object thisObject,
		JSCore.Value[] arguments,
		out JSCore.Value exception) {
			exception = null;
			try {
				Process.spawn_command_line_async ("sudo apt-get update -y");
			} catch (SpawnError e) {
				stdout.printf ("Error: %s\n", e.message);
			}
			return new JSCore.Value.undefined (ctx);
		}

		public static JSCore.Value upgrade (Context ctx,
		JSCore.Object function,
		JSCore.Object thisObject,
		JSCore.Value[] arguments,
		out JSCore.Value exception) {
			exception = null;
			try {
				Process.spawn_command_line_async ("sudo apt-get dist-upgrade -y");
			} catch (SpawnError e) {
				stdout.printf ("Error: %s\n", e.message);
			}
			return new JSCore.Value.undefined (ctx);
		}

		public static JSCore.Value installapp (Context ctx,
		JSCore.Object function,
		JSCore.Object thisObject,
		JSCore.Value[] arguments,
		out JSCore.Value exception) {
	
			exception = null;

			//var nama = "brasero";
			var text = "brasero";
			var nama = text;
			//run program with root previlage or run gksudo, its show a box root
			try {
				Process.spawn_command_line_async (@"sudo apt-get install $nama -y");
			} catch (SpawnError e) {
				stdout.printf ("Error: %s\n", e.message);
			}
			return new JSCore.Value.undefined (ctx);
		}
		
		/*
		========== static function =============
		*/

		public static JSCore.Value installbrasero (Context ctx,
		JSCore.Object function,
		JSCore.Object thisObject,
		JSCore.Value[] arguments,
		out JSCore.Value exception) {
	
			exception = null;
			try {
				Process.spawn_command_line_async ("sudo apt-get install brasero -y");
			} catch (SpawnError e) {
				stdout.printf ("Error: %s\n", e.message);
			}
			return new JSCore.Value.undefined (ctx);
		}

		public static JSCore.Value installaudacious (Context ctx,
		JSCore.Object function,
		JSCore.Object thisObject,
		JSCore.Value[] arguments,
		out JSCore.Value exception) {
	
			exception = null;
			try {
				Process.spawn_command_line_async ("sudo apt-get install audacious -y");
			} catch (SpawnError e) {
				stdout.printf ("Error: %s\n", e.message);
			}
			return new JSCore.Value.undefined (ctx);
		}

		public static JSCore.Value installvlc (Context ctx,
		JSCore.Object function,
		JSCore.Object thisObject,
		JSCore.Value[] arguments,
		out JSCore.Value exception) {
	
			exception = null;
			try {
				Process.spawn_command_line_async ("sudo apt-get install vlc -y");
			} catch (SpawnError e) {
				stdout.printf ("Error: %s\n", e.message);
			}
			return new JSCore.Value.undefined (ctx);
		}

		public static JSCore.Value installtotem (Context ctx,
		JSCore.Object function,
		JSCore.Object thisObject,
		JSCore.Value[] arguments,
		out JSCore.Value exception) {
	
			exception = null;
			try {
				Process.spawn_command_line_async ("sudo apt-get install totem -y");
			} catch (SpawnError e) {
				stdout.printf ("Error: %s\n", e.message);
			}
			return new JSCore.Value.undefined (ctx);
		}

		public static JSCore.Value installfirefox (Context ctx,
		JSCore.Object function,
		JSCore.Object thisObject,
		JSCore.Value[] arguments,
		out JSCore.Value exception) {
	
			exception = null;
			try {
				Process.spawn_command_line_async ("sudo apt-get install firefox -y");
			} catch (SpawnError e) {
				stdout.printf ("Error: %s\n", e.message);
			}
			return new JSCore.Value.undefined (ctx);
		}

		public static JSCore.Value installchromium (Context ctx,
		JSCore.Object function,
		JSCore.Object thisObject,
		JSCore.Value[] arguments,
		out JSCore.Value exception) {
	
			exception = null;
			try {
				Process.spawn_command_line_async ("sudo apt-get install chromium -y");
			} catch (SpawnError e) {
				stdout.printf ("Error: %s\n", e.message);
			}
			return new JSCore.Value.undefined (ctx);
		}

		public static JSCore.Value installpidgin (Context ctx,
		JSCore.Object function,
		JSCore.Object thisObject,
		JSCore.Value[] arguments,
		out JSCore.Value exception) {
	
			exception = null;
			try {
				Process.spawn_command_line_async ("sudo apt-get install pidgin -y");
			} catch (SpawnError e) {
				stdout.printf ("Error: %s\n", e.message);
			}
			return new JSCore.Value.undefined (ctx);
		}

		public static JSCore.Value installfilezilla (Context ctx,
		JSCore.Object function,
		JSCore.Object thisObject,
		JSCore.Value[] arguments,
		out JSCore.Value exception) {
	
			exception = null;
			try {
				Process.spawn_command_line_async ("sudo apt-get install filezilla -y");
			} catch (SpawnError e) {
				stdout.printf ("Error: %s\n", e.message);
			}
			return new JSCore.Value.undefined (ctx);
		}

		public static JSCore.Value installgeany (Context ctx,
		JSCore.Object function,
		JSCore.Object thisObject,
		JSCore.Value[] arguments,
		out JSCore.Value exception) {
	
			exception = null;
			try {
				Process.spawn_command_line_async ("sudo apt-get install geany -y");
			} catch (SpawnError e) {
				stdout.printf ("Error: %s\n", e.message);
			}
			return new JSCore.Value.undefined (ctx);
		}

		public static JSCore.Value installgparted (Context ctx,
		JSCore.Object function,
		JSCore.Object thisObject,
		JSCore.Value[] arguments,
		out JSCore.Value exception) {
	
			exception = null;
			try {
				Process.spawn_command_line_async ("sudo apt-get install gparted -y");
			} catch (SpawnError e) {
				stdout.printf ("Error: %s\n", e.message);
			}
			return new JSCore.Value.undefined (ctx);
		}

		public static JSCore.Value installshotwell (Context ctx,
		JSCore.Object function,
		JSCore.Object thisObject,
		JSCore.Value[] arguments,
		out JSCore.Value exception) {
	
			exception = null;
			try {
				Process.spawn_command_line_async ("sudo apt-get install shotwell -y");
			} catch (SpawnError e) {
				stdout.printf ("Error: %s\n", e.message);
			}
			return new JSCore.Value.undefined (ctx);
		}

		public static JSCore.Value installstardict (Context ctx,
		JSCore.Object function,
		JSCore.Object thisObject,
		JSCore.Value[] arguments,
		out JSCore.Value exception) {
	
			exception = null;
			try {
				Process.spawn_command_line_async ("sudo apt-get install stardict -y");
			} catch (SpawnError e) {
				stdout.printf ("Error: %s\n", e.message);
			}
			return new JSCore.Value.undefined (ctx);
		}

		public static JSCore.Value installlibreoffice (Context ctx,
		JSCore.Object function,
		JSCore.Object thisObject,
		JSCore.Value[] arguments,
		out JSCore.Value exception) {
	
			exception = null;
			try {
				Process.spawn_command_line_async ("sudo apt-get install libreoffice -y");
			} catch (SpawnError e) {
				stdout.printf ("Error: %s\n", e.message);
			}
			return new JSCore.Value.undefined (ctx);
		}

		public static JSCore.Value installevolution (Context ctx,
		JSCore.Object function,
		JSCore.Object thisObject,
		JSCore.Value[] arguments,
		out JSCore.Value exception) {
	
			exception = null;
			try {
				Process.spawn_command_line_async ("sudo apt-get install evolution -y");
			} catch (SpawnError e) {
				stdout.printf ("Error: %s\n", e.message);
			}
			return new JSCore.Value.undefined (ctx);
		}

		/*
		=========== static remove ===============
		*/

		public static JSCore.Value removebrasero (Context ctx,
		JSCore.Object function,
		JSCore.Object thisObject,
		JSCore.Value[] arguments,
		out JSCore.Value exception) {
	
			exception = null;
			try {
				Process.spawn_command_line_async ("sudo apt-get remove brasero -y");
			} catch (SpawnError e) {
				stdout.printf ("Error: %s\n", e.message);
			}
			return new JSCore.Value.undefined (ctx);
		}

		public static JSCore.Value removeaudacious (Context ctx,
		JSCore.Object function,
		JSCore.Object thisObject,
		JSCore.Value[] arguments,
		out JSCore.Value exception) {
	
			exception = null;
			try {
				Process.spawn_command_line_async ("sudo apt-get remove audacious -y");
			} catch (SpawnError e) {
				stdout.printf ("Error: %s\n", e.message);
			}
			return new JSCore.Value.undefined (ctx);
		}

		public static JSCore.Value removevlc (Context ctx,
		JSCore.Object function,
		JSCore.Object thisObject,
		JSCore.Value[] arguments,
		out JSCore.Value exception) {
	
			exception = null;
			try {
				Process.spawn_command_line_async ("sudo apt-get remove vlc -y");
			} catch (SpawnError e) {
				stdout.printf ("Error: %s\n", e.message);
			}
			return new JSCore.Value.undefined (ctx);
		}

		public static JSCore.Value removetotem (Context ctx,
		JSCore.Object function,
		JSCore.Object thisObject,
		JSCore.Value[] arguments,
		out JSCore.Value exception) {
	
			exception = null;
			try {
				Process.spawn_command_line_async ("sudo apt-get remove totem -y");
			} catch (SpawnError e) {
				stdout.printf ("Error: %s\n", e.message);
			}
			return new JSCore.Value.undefined (ctx);
		}

		public static JSCore.Value removefirefox (Context ctx,
		JSCore.Object function,
		JSCore.Object thisObject,
		JSCore.Value[] arguments,
		out JSCore.Value exception) {
	
			exception = null;
			try {
				Process.spawn_command_line_async ("sudo apt-get remove firefox -y");
			} catch (SpawnError e) {
				stdout.printf ("Error: %s\n", e.message);
			}
			return new JSCore.Value.undefined (ctx);
		}

		public static JSCore.Value removechromium (Context ctx,
		JSCore.Object function,
		JSCore.Object thisObject,
		JSCore.Value[] arguments,
		out JSCore.Value exception) {
	
			exception = null;
			try {
				Process.spawn_command_line_async ("sudo apt-get remove chromium -y");
			} catch (SpawnError e) {
				stdout.printf ("Error: %s\n", e.message);
			}
			return new JSCore.Value.undefined (ctx);
		}

		public static JSCore.Value removepidgin (Context ctx,
		JSCore.Object function,
		JSCore.Object thisObject,
		JSCore.Value[] arguments,
		out JSCore.Value exception) {
	
			exception = null;
			try {
				Process.spawn_command_line_async ("sudo apt-get remove pidgin -y");
			} catch (SpawnError e) {
				stdout.printf ("Error: %s\n", e.message);
			}
			return new JSCore.Value.undefined (ctx);
		}

		public static JSCore.Value removefilezilla (Context ctx,
		JSCore.Object function,
		JSCore.Object thisObject,
		JSCore.Value[] arguments,
		out JSCore.Value exception) {
	
			exception = null;
			try {
				Process.spawn_command_line_async ("sudo apt-get remove filezilla -y");
			} catch (SpawnError e) {
				stdout.printf ("Error: %s\n", e.message);
			}
			return new JSCore.Value.undefined (ctx);
		}

		public static JSCore.Value removegeany (Context ctx,
		JSCore.Object function,
		JSCore.Object thisObject,
		JSCore.Value[] arguments,
		out JSCore.Value exception) {
	
			exception = null;
			try {
				Process.spawn_command_line_async ("sudo apt-get remove geany -y");
			} catch (SpawnError e) {
				stdout.printf ("Error: %s\n", e.message);
			}
			return new JSCore.Value.undefined (ctx);
		}

		public static JSCore.Value removegparted (Context ctx,
		JSCore.Object function,
		JSCore.Object thisObject,
		JSCore.Value[] arguments,
		out JSCore.Value exception) {
	
			exception = null;
			try {
				Process.spawn_command_line_async ("sudo apt-get remove gparted -y");
			} catch (SpawnError e) {
				stdout.printf ("Error: %s\n", e.message);
			}
			return new JSCore.Value.undefined (ctx);
		}

		public static JSCore.Value removeshotwell (Context ctx,
		JSCore.Object function,
		JSCore.Object thisObject,
		JSCore.Value[] arguments,
		out JSCore.Value exception) {
	
			exception = null;
			try {
				Process.spawn_command_line_async ("sudo apt-get remove shotwell -y");
			} catch (SpawnError e) {
				stdout.printf ("Error: %s\n", e.message);
			}
			return new JSCore.Value.undefined (ctx);
		}

		public static JSCore.Value removestardict (Context ctx,
		JSCore.Object function,
		JSCore.Object thisObject,
		JSCore.Value[] arguments,
		out JSCore.Value exception) {
	
			exception = null;
			try {
				Process.spawn_command_line_async ("sudo apt-get remove stardict -y");
			} catch (SpawnError e) {
				stdout.printf ("Error: %s\n", e.message);
			}
			return new JSCore.Value.undefined (ctx);
		}

		public static JSCore.Value removelibreoffice (Context ctx,
		JSCore.Object function,
		JSCore.Object thisObject,
		JSCore.Value[] arguments,
		out JSCore.Value exception) {
	
			exception = null;
			try {
				Process.spawn_command_line_async ("sudo apt-get remove libreoffice -y");
			} catch (SpawnError e) {
				stdout.printf ("Error: %s\n", e.message);
			}
			return new JSCore.Value.undefined (ctx);
		}

		public static JSCore.Value removeevolution (Context ctx,
		JSCore.Object function,
		JSCore.Object thisObject,
		JSCore.Value[] arguments,
		out JSCore.Value exception) {
	
			exception = null;
			try {
				Process.spawn_command_line_async ("sudo apt-get remove evolution -y");
			} catch (SpawnError e) {
				stdout.printf ("Error: %s\n", e.message);
			}
			return new JSCore.Value.undefined (ctx);
		}

		/*
		============ end of static function
		*/

		static const JSCore.StaticFunction[] js_funcs = {
			{ "ugm", repougm, PropertyAttribute.ReadOnly },
			{ "arsip", repoarsip, PropertyAttribute.ReadOnly },
			{ "kambing", repokambing, PropertyAttribute.ReadOnly },
			{ "update", update, PropertyAttribute.ReadOnly },
			{ "upgrade", upgrade, PropertyAttribute.ReadOnly },
			{ "installapp", installapp, PropertyAttribute.ReadOnly },
			{ "installbrasero", installbrasero, PropertyAttribute.ReadOnly },
			{ "installaudacious", installaudacious, PropertyAttribute.ReadOnly },
			{ "installvlc", installvlc, PropertyAttribute.ReadOnly },
			{ "installtotem", installtotem, PropertyAttribute.ReadOnly },
			{ "installfirefox", installfirefox, PropertyAttribute.ReadOnly },
			{ "installchromium", installchromium, PropertyAttribute.ReadOnly },
			{ "installpidgin", installpidgin, PropertyAttribute.ReadOnly },
			{ "installgeany", installgeany, PropertyAttribute.ReadOnly },
			{ "installgparted", installgparted, PropertyAttribute.ReadOnly },
			{ "installshotwell", installshotwell, PropertyAttribute.ReadOnly },
			{ "installstardict", installstardict, PropertyAttribute.ReadOnly },
			{ "installlibreoffice", installlibreoffice, PropertyAttribute.ReadOnly },
			{ "installevolution", installevolution, PropertyAttribute.ReadOnly },
			{ "removebrasero", removebrasero, PropertyAttribute.ReadOnly },
			{ "removeaudacious", removeaudacious, PropertyAttribute.ReadOnly },
			{ "removevlc", removevlc, PropertyAttribute.ReadOnly },
			{ "removetotem", removetotem, PropertyAttribute.ReadOnly },
			{ "removefirefox", removefirefox, PropertyAttribute.ReadOnly },
			{ "removechromium", removechromium, PropertyAttribute.ReadOnly },
			{ "removepidgin", removepidgin, PropertyAttribute.ReadOnly },
			{ "removegeany", removegeany, PropertyAttribute.ReadOnly },
			{ "removegparted", removegparted, PropertyAttribute.ReadOnly },
			{ "removeshotwell", removeshotwell, PropertyAttribute.ReadOnly },
			{ "removestardict", removestardict, PropertyAttribute.ReadOnly },
			{ "removelibreoffice", removelibreoffice, PropertyAttribute.ReadOnly },
			{ "removeevolution", installevolution, PropertyAttribute.ReadOnly },
			{ null, null, 0 }
		};

		static const ClassDefinition js_class = {
			0, // version
			ClassAttribute.None, // attribute
			"Apps", // className
			null,// parentClass
			null,// static values
			js_funcs, // static functions
			null, // initialize
			null, // finalize
			null, // hasProperty
			null, // getProperty
			null, // setProperty
			null, // deleteProperty
			null, // getPropertyNames
			null, // callAsFunction
			null, // callAsConstructor
			null, // hasInstance
			null // convertToType
		};
		
		public void setup_js_class (GlobalContext context) {
			var theClass = new Class (js_class);
			var theObject = new JSCore.Object (context, theClass, context);
			var theGlobal = context.get_global_object ();
			var id = new String.with_utf8_c_string ("Apps");
			theGlobal.set_property (context, id, theObject,
			PropertyAttribute.None, null);
		}
	}
}