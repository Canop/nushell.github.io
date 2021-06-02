(window.webpackJsonp=window.webpackJsonp||[]).push([[299],{700:function(e,a,t){"use strict";t.r(a);var s=t(44),n=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"installing-nu"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installing-nu"}},[e._v("#")]),e._v(" Installing Nu")]),e._v(" "),t("p",[e._v("The best way currently to get Nu up and running is to install from "),t("a",{attrs:{href:"https://crates.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("crates.io"),t("OutboundLink")],1),e._v(", download pre-built binaries from our "),t("a",{attrs:{href:"https://github.com/nushell/nushell/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("release page"),t("OutboundLink")],1),e._v(", build from source, or pulling a pre-built container with Docker.")]),e._v(" "),t("h2",{attrs:{id:"pre-built-binaries"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pre-built-binaries"}},[e._v("#")]),e._v(" Pre-built binaries")]),e._v(" "),t("p",[e._v("You can download Nu pre-built from the "),t("a",{attrs:{href:"https://github.com/nushell/nushell/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("release page"),t("OutboundLink")],1),e._v(". Alternatively, if you use "),t("a",{attrs:{href:"https://brew.sh/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Homebrew"),t("OutboundLink")],1),e._v(" for macOS, you can install the binary by running "),t("code",[e._v("brew install nushell")]),e._v(".")]),e._v(" "),t("h3",{attrs:{id:"windows"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#windows"}},[e._v("#")]),e._v(" Windows")]),e._v(" "),t("p",[t("strong",[e._v("please note:")]),e._v(" Nu works on Windows 10 and does not currently have Windows 7/8.1 support.")]),e._v(" "),t("p",[e._v("Download the current released "),t("code",[e._v(".zip")]),e._v("-file from the "),t("a",{attrs:{href:"https://github.com/nushell/nushell/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("release page"),t("OutboundLink")],1),e._v(" and extract it for example to:")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("C:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Program Files\n")])])]),t("p",[e._v("And then add the folder of "),t("code",[e._v("nu")]),e._v(" to your PATH. Once we have done that, we can run Nu using the "),t("code",[e._v("nu")]),e._v(" command:")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" nu\nC:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Users"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("user"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")])])])]),t("p",[e._v("If you are using the new "),t("a",{attrs:{href:"https://github.com/microsoft/terminal",target:"_blank",rel:"noopener noreferrer"}},[e._v("Windows Terminal"),t("OutboundLink")],1),e._v(" you can set "),t("code",[e._v("nu")]),e._v(" as your default shell by adding:")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"guid"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"{2b372ca1-1ee2-403d-a839-6d63077ad871}"')]),e._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"hidden"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),e._v(" false,\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"name"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Nu Shell"')]),e._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"commandline"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"nu.exe"')]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),t("p",[e._v("to  "),t("code",[e._v('"profiles"')]),e._v(" in your Terminal Settings (JSON-file). The last thing to do is to change the "),t("code",[e._v('"defaultProfile"')]),e._v(" to:")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"defaultProfile"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"{2b372ca1-1ee2-403d-a839-6d63077ad871}"')]),e._v(",\n")])])]),t("p",[e._v("Now "),t("code",[e._v("nu")]),e._v(" should load on startup of the Windows Terminal.")]),e._v(" "),t("h2",{attrs:{id:"pre-built-docker-containers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pre-built-docker-containers"}},[e._v("#")]),e._v(" Pre-built docker containers")]),e._v(" "),t("p",[e._v("If you want to pull a pre-built container, you can browse tags for the "),t("a",{attrs:{href:"https://quay.io/organization/nushell",target:"_blank",rel:"noopener noreferrer"}},[e._v("nushell organization"),t("OutboundLink")],1),e._v("\non "),t("a",{attrs:{href:"https://quay.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Quay.io"),t("OutboundLink")],1),e._v(". Pulling a container would come down to:")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("$ docker pull quay.io/nushell/nu-base\n$ docker pull quay.io/nushell/nu\n")])])]),t("p",[e._v('Both "nu-base" and "nu" provide the '),t("code",[e._v("nu")]),e._v(" binary, however nu-base also includes the source code at "),t("code",[e._v("/code")]),e._v('\nin the container and all dependencies. The "nu" container is a bit smaller, if size is important to you.')]),e._v(" "),t("p",[e._v("Optionally, you can also build the containers locally using the "),t("a",{attrs:{href:"https://github.com/nushell/nushell/tree/master/docker",target:"_blank",rel:"noopener noreferrer"}},[e._v("provided dockerfiles"),t("OutboundLink")],1),e._v(':\nTo build the base image ("nu-base"):')]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("$ docker build -f docker/Dockerfile.nu-base -t nushell/nu-base "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")])])])]),t("p",[e._v('And to build the smaller container("nu") using a multi-stage build:')]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("$ docker build -f docker/Dockerfile -t nushell/nu "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v("\n")])])]),t("p",[e._v("You can run either the pre-built or locally built containers as follows:")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("$ docker run -it nushell/nu-base\n$ docker run -it nushell/nu\n/"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("exit")]),e._v("\n")])])]),t("h2",{attrs:{id:"getting-ready"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#getting-ready"}},[e._v("#")]),e._v(" Getting Ready")]),e._v(" "),t("p",[e._v("Before we can install Nu, we need to make sure our system has the necessary requirements. Currently, this means making sure we have both the Rust toolchain and local dependencies installed.")]),e._v(" "),t("h3",{attrs:{id:"installing-a-compiler-suite"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installing-a-compiler-suite"}},[e._v("#")]),e._v(" Installing a compiler suite")]),e._v(" "),t("p",[e._v("For Rust to work properly, you'll need to have a compatible compiler suite installed on your system. These are the recommended compiler suites:")]),e._v(" "),t("ul",[t("li",[e._v("Linux: GCC or Clang")]),e._v(" "),t("li",[e._v("macOS: Clang (install Xcode)")]),e._v(" "),t("li",[e._v("Windows: "),t("a",{attrs:{href:"https://visualstudio.microsoft.com/vs/community/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Visual Studio Community Edition"),t("OutboundLink")],1)])]),e._v(" "),t("p",[e._v('For Windows, when you install Visual Studio Community Edition, make sure to install the "C++ build tools" as what we need is '),t("code",[e._v("link.exe")]),e._v(" which is provided as part of that optional install.  With that, we're ready to move to the next step.")]),e._v(" "),t("h3",{attrs:{id:"installing-rust"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installing-rust"}},[e._v("#")]),e._v(" Installing Rust")]),e._v(" "),t("p",[e._v("If we don't already have Rust on our system, the best way to install it is via "),t("a",{attrs:{href:"https://rustup.rs/",target:"_blank",rel:"noopener noreferrer"}},[e._v("rustup"),t("OutboundLink")],1),e._v(". Rustup is a way of managing Rust installations, including managing using different Rust versions.")]),e._v(" "),t("p",[e._v("Nu currently requires the "),t("strong",[e._v("latest stable (1.46 or later)")]),e._v(" version of Rust. The best way is to let "),t("code",[e._v("rustup")]),e._v(" find the correct version for you. When you first open "),t("code",[e._v("rustup")]),e._v(" it will ask what version of Rust you wish to install:")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("Current installation options:\n\ndefault "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("host")]),e._v(" triple: x86_64-unknown-linux-gnu\ndefault toolchain: stable\nprofile: default\nmodify "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[e._v("PATH")]),e._v(" variable: "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("yes")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" Proceed with installation "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("default"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" Customize installation\n"),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" Cancel installation\n")])])]),t("p",[e._v("Once we are ready, we press 1 and then enter.")]),e._v(" "),t("p",[e._v("If you'd rather not install Rust via "),t("code",[e._v("rustup")]),e._v(", you can also install it via other methods (e.g. from a package in a Linux distro). Just be sure to install a version of Rust that is 1.46 or later.")]),e._v(" "),t("h2",{attrs:{id:"dependencies"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dependencies"}},[e._v("#")]),e._v(" Dependencies")]),e._v(" "),t("h3",{attrs:{id:"debian-ubuntu"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#debian-ubuntu"}},[e._v("#")]),e._v(" Debian/Ubuntu")]),e._v(" "),t("p",[e._v('You will need to install the "pkg-config" and "libssl-dev" package:')]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" pkg-config libssl-dev\n")])])]),t("p",[e._v("Linux users who wish to use the "),t("code",[e._v("rawkey")]),e._v(" or "),t("code",[e._v("clipboard")]),e._v(' optional features will need to install the "libx11-dev" and "libxcb-composite0-dev" packages:')]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" libxcb-composite0-dev libx11-dev\n")])])]),t("h3",{attrs:{id:"rhel-based-distros"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rhel-based-distros"}},[e._v("#")]),e._v(" RHEL based distros")]),e._v(" "),t("p",[e._v('You will need to install "libxcb", "openssl-devel" and "libX11-devel":')]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("yum "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" libxcb openssl-devel libX11-devel\n")])])]),t("h3",{attrs:{id:"macos"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#macos"}},[e._v("#")]),e._v(" macOS")]),e._v(" "),t("p",[e._v("Using "),t("a",{attrs:{href:"https://brew.sh/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Homebrew"),t("OutboundLink")],1),e._v(', you will need to install the "openssl" and "cmake" using:')]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("brew "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" openssl cmake\n")])])]),t("h2",{attrs:{id:"installing-from-crates-io"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installing-from-crates-io"}},[e._v("#")]),e._v(" Installing from "),t("a",{attrs:{href:"https://crates.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("crates.io"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("Once we have the dependencies Nu needs, we can install it using the "),t("code",[e._v("cargo")]),e._v(" command that comes with the Rust compiler.")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" cargo "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" nu\n")])])]),t("p",[e._v("That's it!  The cargo tool will do the work of downloading Nu and its source dependencies, building it, and installing it into the cargo bin path so that we can run it.")]),e._v(" "),t("p",[e._v("If you want to install with more features, you can use:")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" cargo "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" nu --features"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("extra\n")])])]),t("p",[e._v("For all the available features, the easiest way is to check out Nu and build it yourself using the same Rust tools:")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/nushell/nushell.git\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" nushell\nnushell"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" cargo "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" --path "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v(" --features"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("extra\n")])])]),t("p",[e._v("For this to work, make sure you have all the dependencies (shown above) on your system.")]),e._v(" "),t("p",[e._v("Once installed, we can run Nu using the "),t("code",[e._v("nu")]),e._v(" command:")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("$ nu\n/home/jonathan/Source"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),t("h2",{attrs:{id:"building-from-source"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#building-from-source"}},[e._v("#")]),e._v(" Building from source")]),e._v(" "),t("p",[e._v("We can also build our own Nu from source directly from github. This gives us immediate access to the latest Nu features and bug fixes.")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/nushell/nushell.git\n")])])]),t("p",[e._v("Git will clone the main nushell repo for us. From there, we can build and run Nu if we are using "),t("code",[e._v("rustup")]),e._v(" with:")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" nushell\nnushell"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" cargo build --workspace --features"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("extra "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" cargo run --features"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("extra\n")])])]),t("p",[e._v("You can also build and run Nu in release mode:")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("nushell"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" cargo build --release --workspace --features"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("extra "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" cargo run --release --features"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("extra\n")])])]),t("p",[e._v('People familiar with Rust may wonder why we do both a "build" and a "run" step if "run" does a build by default. This is to get around a shortcoming of the new '),t("code",[e._v("default-run")]),e._v(" option in Cargo, and ensure that all plugins are built, though this may not be required in the future.")]),e._v(" "),t("h2",{attrs:{id:"setting-as-your-login-shell"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#setting-as-your-login-shell"}},[e._v("#")]),e._v(" Setting as your login shell")]),e._v(" "),t("p",[t("strong",[e._v("!!! Nu is still in development, and may not be stable for everyday use. !!!")])]),e._v(" "),t("p",[e._v("To set the login shell you can use the "),t("a",{attrs:{href:"https://linux.die.net/man/1/chsh",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("chsh")]),t("OutboundLink")],1),e._v(" command.\nSome Linux distributions have a list of valid shells located in "),t("code",[e._v("/etc/shells")]),e._v(" and will disallow changing the shell until Nu is in the whitelist. You may see an error similar to the one below if you haven't updated the "),t("code",[e._v("shells")]),e._v(" file:")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("chsh: /home/username/.cargo/bin/nu is an invalid shell\n")])])]),t("p",[e._v("You can add Nu to the list of allowed shells by appending your Nu binary to the "),t("code",[e._v("shells")]),e._v(" file.\nThe path to add can be found with the command "),t("code",[e._v("which nu")]),e._v(", usually it is "),t("code",[e._v("$HOME/.cargo/bin/nu")]),e._v(".")])])}),[],!1,null,null,null);a.default=n.exports}}]);