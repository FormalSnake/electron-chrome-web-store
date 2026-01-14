export declare function downloadExtensionFromURL(url: string, extensionsDir: string, expectedExtensionId?: string): Promise<string>;
/**
 * Download and unpack extension to the given extensions directory.
 */
export declare function downloadExtension(extensionId: string, extensionsDir: string): Promise<string>;
interface CommonExtensionOptions {
    /** Session to load extensions into. */
    session?: Electron.Session;
    /**
     * Directory where web store extensions will be installed.
     * Defaults to `Extensions` under the app's `userData` directory.
     */
    extensionsPath?: string;
}
interface InstallExtensionOptions extends CommonExtensionOptions {
    /** Options for loading the extension. */
    loadExtensionOptions?: Electron.LoadExtensionOptions;
}
interface UninstallExtensionOptions extends CommonExtensionOptions {
}
/**
 * Install extension from the web store.
 */
export declare function installExtension(extensionId: string, opts?: InstallExtensionOptions): Promise<Electron.Extension>;
/**
 * Uninstall extension from the web store.
 */
export declare function uninstallExtension(extensionId: string, opts?: UninstallExtensionOptions): Promise<void>;
export {};
