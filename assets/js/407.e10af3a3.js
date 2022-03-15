(window.webpackJsonp=window.webpackJsonp||[]).push([[407],{882:function(e,t,n){"use strict";n.r(t);var a=n(35),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"configuration"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),n("h2",{attrs:{id:"nushell-configuration-with-config-nu"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nushell-configuration-with-config-nu"}},[e._v("#")]),e._v(" Nushell Configuration with "),n("code",[e._v("config.nu")])]),e._v(" "),n("p",[e._v("Nushell uses a configuration system that loads+runs a Nushell script file at launch time. That configuration file is called the "),n("code",[e._v("config.nu")]),e._v(" file, and the path to it can be found by calling "),n("code",[e._v("echo $nu.config-path")]),e._v(". "),n("code",[e._v("config.nu")]),e._v(" can add definitions, environment variables, and more to the global namespace.")]),e._v(" "),n("p",[e._v("An example "),n("code",[e._v("config.nu")]),e._v(" file can be found in our repo "),n("a",{attrs:{href:"https://github.com/nushell/nushell/blob/main/src/default_config.nu",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("h3",{attrs:{id:"configuring-config"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#configuring-config"}},[e._v("#")]),e._v(" Configuring "),n("code",[e._v("$config")])]),e._v(" "),n("p",[e._v("Nushell's main settings are kept in the global "),n("code",[e._v("$config")]),e._v(" variable as a record. This record can be created using:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("let $config = {\n  ...\n}\n")])])]),n("p",[e._v("You can also shadow "),n("code",[e._v("$config")]),e._v(" and update it:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("let $config = ($config | update <field name> <field value>)\n")])])]),n("h3",{attrs:{id:"environment"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#environment"}},[e._v("#")]),e._v(" Environment")]),e._v(" "),n("p",[e._v("You can set environment variables for the duration of a Nushell session using "),n("RouterLink",{attrs:{to:"/book/commands/let-env.html"}},[n("code",[e._v("let-env")])]),e._v(" calls inside the "),n("code",[e._v("config.nu")]),e._v(" file. For example:")],1),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("let-env FOO = 'BAR'\n")])])]),n("p",[e._v("These are some important variables to look at for Nushell-specific settings:")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("LS_COLORS")]),e._v(": Sets up colors per file type in ls")]),e._v(" "),n("li",[n("code",[e._v("PROMPT_COMMAND")]),e._v(": Code to execute for setting up the prompt (block or string)")]),e._v(" "),n("li",[n("code",[e._v("PROMPT_COMMAND_RIGHT")]),e._v(": Code to execute for setting up the right prompt (block)")]),e._v(" "),n("li",[n("code",[e._v('PROMPT_INDICATOR = "〉"')]),e._v(': The indicator printed after the prompt (by default ">"-like Unicode symbol)')]),e._v(" "),n("li",[n("code",[e._v('PROMPT_INDICATOR_VI_INSERT = ": "')])]),e._v(" "),n("li",[n("code",[e._v('PROMPT_INDICATOR_VI_NORMAL = "〉 "')])]),e._v(" "),n("li",[n("code",[e._v('PROMPT_MULTILINE_INDICATOR = "::: "')])])]),e._v(" "),n("h3",{attrs:{id:"color-config-section"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#color-config-section"}},[e._v("#")]),e._v(" Color Config section")]),e._v(" "),n("p",[e._v("You can learn more about setting up colors and theming in the "),n("a",{attrs:{href:"https://github.com/nushell/nushell/blob/main/docs/How_To_Coloring_and_Theming.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("associated chapter"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("h2",{attrs:{id:"configuring-nu-as-a-login-shell"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#configuring-nu-as-a-login-shell"}},[e._v("#")]),e._v(" Configuring Nu as a login shell")]),e._v(" "),n("p",[e._v("To use Nu as a login shell, you'll need to configure the "),n("code",[e._v("$env")]),e._v(" variable. With this, you'll have enough support to run external commands as a login shell.")]),e._v(" "),n("p",[e._v("You can build the full set of environment variables by running Nu inside of another shell, like Bash. Once you're in Nu, you can run a command like this:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("> env | each { |it| echo $\"let-env ($it.name) = '($it.raw)'\" } | str collect (char nl)\n")])])]),n("p",[e._v("This will print out "),n("RouterLink",{attrs:{to:"/book/commands/let-env.html"}},[n("code",[e._v("let-env")])]),e._v(" lines, one for each environment variable along with its setting.")],1),e._v(" "),n("p",[e._v("Next, on some distros you'll also need to ensure Nu is in the /etc/shells list:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("> cat /etc/shells\n# /etc/shells: valid login shells\n/bin/sh\n/bin/dash\n/bin/bash\n/bin/rbash\n/usr/bin/screen\n/usr/bin/fish\n/home/jonathan/.cargo/bin/nu\n")])])]),n("p",[e._v("With this, you should be able to "),n("code",[e._v("chsh")]),e._v(" and set Nu to be your login shell. After a logout, on your next login you should be greeted with a shiny Nu prompt.")]),e._v(" "),n("h3",{attrs:{id:"macos-keeping-usr-bin-open-as-open"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#macos-keeping-usr-bin-open-as-open"}},[e._v("#")]),e._v(" macOS: Keeping "),n("code",[e._v("/usr/bin/open")]),e._v(" as "),n("code",[e._v("open")])]),e._v(" "),n("p",[e._v("Some tools (e.g. Emacs) rely on an "),n("code",[e._v("open")]),e._v(" command to open files on Mac.\nAs Nushell has its own "),n("RouterLink",{attrs:{to:"/book/commands/open.html"}},[n("code",[e._v("open")])]),e._v(" command which has different semantics and shadows "),n("code",[e._v("/usr/bin/open")]),e._v(", these tools will error out when trying to use it.\nOne way to work around this is to define "),n("code",[e._v("alias")]),e._v("es in your "),n("code",[e._v("config.nu")]),e._v(" file like this:")],1),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("alias nuopen = open\nalias open = ^open\n")])])]),n("h2",{attrs:{id:"prompt-configuration"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#prompt-configuration"}},[e._v("#")]),e._v(" Prompt configuration")]),e._v(" "),n("p",[e._v("Prompt configuration is handled by setting the value of "),n("code",[e._v("prompt")]),e._v(".")]),e._v(" "),n("p",[e._v("For example, to use "),n("a",{attrs:{href:"https://starship.rs",target:"_blank",rel:"noopener noreferrer"}},[e._v("Starship"),n("OutboundLink")],1),e._v(", download it and enter the following command:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('let-env PROMPT_COMMAND = "starship prompt"\n')])])]),n("p",[e._v("Now restart Nu.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("nushell on 📙 main is 📦 v0.43.0 via 🦀 v1.59.0\n❯\n")])])]),n("p",[e._v("If your prompt looks a bit garbled like this:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("%{%}~%{%}\n%{%}❯%{%}\n")])])]),n("p",[e._v("you may want to configure "),n("code",[e._v("STARSHIP_SHELL")]),e._v(" environment variable when setting the prompt.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('config set prompt "STARSHIP_SHELL=nushell starship prompt"\n')])])]),n("p",[e._v("See more documentation on 3rd party prompts "),n("a",{attrs:{href:"https://github.com/nushell/nushell/blob/main/docs/3rd_Party_Prompts.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),n("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=o.exports}}]);