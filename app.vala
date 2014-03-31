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
		public static JSCore.Value install1 (Context ctx,
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

		static const JSCore.StaticFunction[] js_funcs = {
			{ "ugm", repougm, PropertyAttribute.ReadOnly },
			{ "arsip", repoarsip, PropertyAttribute.ReadOnly },
			{ "kambing", repokambing, PropertyAttribute.ReadOnly },
			{ "update", update, PropertyAttribute.ReadOnly },
			{ "upgrade", upgrade, PropertyAttribute.ReadOnly },
			{ "installapp", installapp, PropertyAttribute.ReadOnly },
			{ "pasang1", install1, PropertyAttribute.ReadOnly },
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