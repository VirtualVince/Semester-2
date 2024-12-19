/*walkthrough11c.html
practicing modules
- creates a new namespace (object)
 */
const module11cVar = "this is available locally, unless the variable is exported or the file is linked to the html";
const module11cVar2 = "this is available locally, unless the variable is exported or the file is linked to the html";

export {module11cVar, module11cVar2}; // multi-variable export