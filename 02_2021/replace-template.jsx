/*
 After effects script

 This will take a template and add multiple compositions after replacing a source.

 It will open a fileselector
 This will replace the source of a layer. The layer should be called 'replace'. Then it will copy the composition and
 do the same for another file picked via the fileselector.

 */
{
    function SmartImport() {
        var scriptName = "Em Ka Bee Lease";

        // Ask the user for a folder whose contents are to be imported.
        var targetFolder = Folder.selectDialog("Import items from folder...");
        if (targetFolder != null) {
            // If no project open, create a new project to import the files into.
            if (!app.project) {
                app.newProject();
            }

            function processFile(theFile) {
                try {
                    // Create a variable containing ImportOptions.
                    var importOptions = new ImportOptions(theFile);
                    try {
                        var currentItem = app.project.importFile(importOptions);

                        for (var i = 1; i <= app.project.items.length; i++) {
                            var elm = app.project.items[i];
                            // Look for the template composition
                            if (elm instanceof CompItem && elm.name === 'template') {
                                var netItem = app.project.item(i).duplicate();

                                for (var j = 1; j <= netItem.numLayers; j++) {
                                    // Replace the soure of the item called 'replace'
                                    if (netItem.layer(j).name === 'replace') {
                                        netItem.layer(j).replaceSource(currentItem, true);
                                    }
                                }
                            }
                        }
                    } catch (error) {
                        alert(error.toString() + importOptions.file.fsName, scriptName);
                    }
                } catch (error) {
                    // Ignore errors.
                }
            }

            function processFolder(theFolder) {
                // Get an array of files in the target folder.
                var files = theFolder.getFiles();

                for (index in files) { // Go through the array and set each element to singleFile, then run the following.
                    if (files[index] instanceof File) {
                        processFile(files[index]); // Calls the processFile function above.
                    }
                }
            }

            // Recursively examine that folder.
            processFolder(targetFolder);
        }
    }


    SmartImport();
}
