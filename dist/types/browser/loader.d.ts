type ExtensionPathBaseInfo = {
    manifest: chrome.runtime.Manifest;
    path: string;
};
type ExtensionPathInfo = ({
    type: 'store';
    id: string;
} & ExtensionPathBaseInfo) | ({
    type: 'unpacked';
} & ExtensionPathBaseInfo);
/**
 * Load all extensions from the given directory.
 */
export declare function loadAllExtensions(session: Electron.Session, extensionsPath: string, options?: {
    allowUnpacked?: boolean;
}): Promise<void>;
export declare function findExtensionInstall(extensionId: string, extensionsPath: string): Promise<ExtensionPathInfo | null>;
export {};
