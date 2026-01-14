export { loadAllExtensions } from './loader';
export { installExtension, uninstallExtension, downloadExtension } from './installer';
export { updateExtensions } from './updater';
import { AfterInstall, AfterUninstall, BeforeInstall, CustomSetExtensionEnabled, ExtensionId, OverrideExtensionInstallStatus } from './types';
interface ElectronChromeWebStoreOptions {
    /**
     * Session to enable the Chrome Web Store in.
     * Defaults to session.defaultSession
     */
    session?: Electron.Session;
    /**
     * Path to the 'electron-chrome-web-store' module.
     *
     * @deprecated See "Packaging the preload script" in the readme.
     */
    modulePath?: string;
    /**
     * Path to extensions directory.
     * Defaults to 'Extensions/' under app's userData path.
     */
    extensionsPath?: string;
    /**
     * Load extensions installed by Chrome Web Store.
     * Defaults to true.
     */
    loadExtensions?: boolean;
    /**
     * Whether to allow loading unpacked extensions. Only loads if
     * `loadExtensions` is also enabled.
     * Defaults to false.
     */
    allowUnpackedExtensions?: boolean;
    /**
     * List of allowed extension IDs to install.
     */
    allowlist?: ExtensionId[];
    /**
     * List of denied extension IDs to install.
     */
    denylist?: ExtensionId[];
    /**
     * Whether extensions should auto-update.
     */
    autoUpdate?: boolean;
    /**
     * Minimum supported version of Chrome extensions.
     * Defaults to 3.
     */
    minimumManifestVersion?: number;
    /**
     * Called prior to installing an extension. If implemented, return a Promise
     * which resolves with `{ action: 'allow' | 'deny' }` depending on the action
     * to be taken.
     */
    beforeInstall?: BeforeInstall;
    /**
     * Called after an extension is successfully installed.
     */
    afterInstall?: AfterInstall;
    /**
     * Called after an extension is uninstalled.
     */
    afterUninstall?: AfterUninstall;
    /**
     * Custom handler for enabling/disabling extensions.
     * Return true if the operation was successful.
     */
    customSetExtensionEnabled?: CustomSetExtensionEnabled;
    /**
     * Override the extension install status check.
     * Return a custom status string or undefined to use the default behavior.
     */
    overrideExtensionInstallStatus?: OverrideExtensionInstallStatus;
}
/**
 * Install Chrome Web Store support.
 *
 * @param options Chrome Web Store configuration options.
 */
export declare function installChromeWebStore(opts?: ElectronChromeWebStoreOptions): Promise<void>;
