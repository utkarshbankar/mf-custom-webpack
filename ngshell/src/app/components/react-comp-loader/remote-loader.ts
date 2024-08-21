import { loadRemoteEntry } from '@angular-architects/module-federation';

export async function loadRemoteScript(remoteUrl: string, scope: string, module: string): Promise<any> {
    await loadRemoteEntry(remoteUrl, scope);
    const container = (window as any)[scope];
    await container.init(__webpack_share_scopes__.default);
    const factory = await container.get(module);
    return factory();
}
