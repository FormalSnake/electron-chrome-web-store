import { WebStoreState } from './types';
/**
 * Check session's loaded extensions for updates and install any if available.
 */
export declare function updateExtensions(session?: Electron.Session): Promise<void>;
export declare function initUpdater(state: WebStoreState): Promise<void>;
