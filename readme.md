## Author: Daniel Riddell
## Author URI: dan@24digital.com.au
## Version: 1.1
## Last Edited: 28/09/15


/--------/--------/--------/

## 		Getting started

/--------/--------/--------/

1. Open terminal, and jump into the root of this project

2. Install Ruby 
	
	Head over to 'https://www.ruby-lang.org/en/documentation/installation/' to find your operating system instructions

3. Install Grunt

	'npm install -g grunt-cli'

4. Install Sass-globbing (note the version number, the latest version is corrupt – Sept 2015)
	
	'gem install sass-globbing -v 1.1.0'

5. Run 'npm install' to make sure you have all required components installed

6. Run 'grunt' from the terminal to concatenate and compile all CSS and JS in the project


/--------/--------/--------/

## 		Overview

/--------/--------/--------/


The HTML (markup) is setup into components, located in the 'library/partials' folder.

Each component's HTML is not to be modified.

The corresponding SCSS should be located in the 'library/__source/css/project' folder, which will compile automatically into Grunt, after the vendor files (and in alphebetical order)

Any third party CSS or JS should be loaded through bower (where possible), otherwise they should exists in the corresponding third-party folders under JS and CSS.


/--------/--------/--------/

## 		Examples

/--------/--------/--------/

A few examples exist in the root of this project.

The best examples have the components outlaid at the top of the html file in a html comment. These are:
-- my-projects.html
-- products-archive.html
-- colour-single.html
-- colour-chart.html

