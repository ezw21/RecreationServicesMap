import { UserSession, ICredential, IUser } from '@esri/arcgis-rest-auth';
export interface PortalInfo {
    portalUrl: string;
    clientId?: string;
    isWebTier?: boolean;
    isMainPortal?: boolean;
}
/**
 * @ignore
 * The reason type session changed
 */
export declare enum SessionChangedReasonType {
    ArcGISJSSync = "ARCGIS_JS",
    OtherWindowSync = "OTHER_WINDOW",
    AddOrUpdate = "ADD_OR_UPDATE",
    Remove = "REMOVE"
}
/**
 * @ignore
 * The session change listener type
 */
export declare type SessionChangeListener = (sessions: UserSession[], reasonType: SessionChangedReasonType) => void;
/**
 * The `SessionManager` is used to manage user sign in sessions.
 */
export declare class SessionManager {
    static instance: SessionManager;
    /**
     * The key is combined with urlKey and customBaseUrl for normal portal,
     * but if the customBaseUrl is a map url(start with maps|mapsqa|mapsdevext),
     * the customBaseUrl's prefix will be replaced by www|qaext|devext.
     *
     * urlKey is the first word of a url, such as 'www',
     * and customBaseUrl is a url part before 'sharing/rest' and after urlkey
     *
     * example1:
     * url: https://beijing.mapsqa.arcgis.com
     * urlKey: beijing
     * customBaseUrl: mapsqa.arcgis.com
     * key: qaext.arcgis.com
     *
     * example2:
     * url: http://private.test.com
     * urlKey: private
     * customBaseUrl: test.com
     * key: private.test.com
     *  */
    private sessions;
    private mainPortalInfo;
    private trustedServers;
    private readonly arcgisJSIM;
    private isSigning;
    private signInQueue;
    private onSessionChangedCallbacks;
    /**
     * Return main session.
     *
     * The main session is session of the portal that the app connects to.
     */
    getMainSession(): UserSession;
    /**
     * Return all sessions.
     */
    getSessions(): UserSession[];
    /**
     * Clear all sessions
     */
    clearSessions(): void;
    /**
     * On session changed
     */
    private onSessionChanged;
    /**
     * Get singleton instance.
     */
    static getInstance(): SessionManager;
    /**
     * @ignore
     */
    constructor();
    /**
     * @ignore
     *
     * We can init session from 3 places: local storage, cookie(esri_aopc), and parent app.
     *
     * First, we'll check `canReadSessionFromParent()`. If true, return `readSessionFromParent()`. Else,
     * Then, for develop edition, init session from local storage.
     *       for non-develop edition, init session from cookie(esri_aopc) or local storage.
     *
     * About sync session for embed:
     * Ref: https://esri.github.io/arcgis-rest-js/guides/embedded-apps/
     *
     * Note: **Embed** here means embed for auth sync only, by checking `arcgis-auth-origin` URL param.
     *
     * When an exb app is embedded, will call `UserSession.fromParent(arcgisAuthOrigin)` to get auth from host app.
     * When an exb app is as host app, will listen and reply auth message from/to all `*.arcgis.com` domains
     *
     * @param portalInfo The portal info will be used as main portal.
     */
    initSession(portalInfo?: PortalInfo): Promise<void>;
    /**
     * Init session from storage
     */
    private initSessionFromStorage;
    /**
     * Init session from cookie or storage
     * @param portalInfo
     */
    private initSessionFromCookieOrStorage;
    /**
     * Handle the situation for init sessiion failed.
     */
    private failedToInitSession;
    /**
     * Set session by PlatformSelf response
     * @param response
     * @param portalInfo
     */
    private setSesssionByPlatformSelfResponse;
    /**
     * Sends request to check token of session from storage.
     * @param portalUrl
     */
    private isValidTokenFromStorage;
    /**
     * Reture true if the session is a main session and is valid.
     * @param session
     */
    private readonly isMainSession;
    /**
     * Handle invalid sign-in session.
     */
    private readonly processInvalidSignInSession;
    /**
     * @ignore
     * Redirect to signin page
     */
    gotoSignInPage: () => void;
    /**
     * @ignore
     * Get user info.
     * @param session
     */
    getUserInfo(): Promise<IUser>;
    /**
     * Handle works after got user info.
     * @param session
     */
    private afterGetUserInfo;
    /**
     * @ignore
     * Set the main portal
     * @param portalInfo
     */
    setMainPortal(portalInfo: PortalInfo): void;
    /**
     * @ignore
     * Get your portal info
     */
    getMainPortal(): PortalInfo;
    /**
     * @ignore
     * Get trusted server from authorizedCrossOriginDomains of portalSelf info.
     */
    getTrustedServers(): string[];
    /**
     * @ignore
     * Return true if the serverUrl is trusted.
     * @param serverUrl
     */
    isTrustedServer(serverUrl: string): boolean;
    /**
     * Remove the session from session manager.
     * @param session
     */
    removeSession(session: UserSession): boolean;
    /**
     * Remove session by key.
     * @param key
     */
    private removeSessionByKey;
    /**
     * @ignore
     *
     * Add or replace a session, we use session key to check whether to add new or replace old one.
     * After session changed, will sync to other window's SessionManager.
     * @param session
     */
    addOrReplaceSession(session: UserSession): boolean;
    /**
     * Add a new session, if the session's key has exist, replace it.
     * @param session
     */
    private doAddOrReplaceSession;
    /**
     * Update the session
     * @param key
     * @param session
     *
     */
    private setSession;
    /**
     * Return session by url.
     * @param url
     */
    getSessionByUrl(url: string): UserSession;
    /**
     * Get session key from a session.
     *
     * @param session
     */
    private getSessionKeyFromSession;
    /**
     * @ignore
     *
     * The URL can be an arcgis service url or a portal url, the key is used as id of the session.
     *
     * @param url
     */
    getSessionKeyFromUrl(url: string): string;
    /**
     * @ignore
     * Get session key from a service url, return '' if the url is not a server url.
     *
     * @param url
     */
    getServerKeyFromUrl(url: string): string;
    /**
     * Get portal key from url.
     *
     * @param url
     */
    private getPortalKeyFromUrl;
    /**
     * Get portal url info.
     * @param portalUrl
     */
    private getPortalUrlInfo;
    /**
     * Get session from auth info.
     * @param authInfo
     */
    private getSessionFromAuthInfo;
    /**
     * Get session from storage.
     */
    private getSessionFromStorage;
    /**
     * Remvoe cookie by key.
     * @param key
     */
    private readCookie;
    /**
     * Get portal from authInfo.
     * @param authInfo
     */
    private getPortalFromAuthInfo;
    /**
     * Reture true if it's a valid session.
     * @param session
     */
    private isSessionExpired;
    /**
     * Get authInfo from session.
     * @param session
     */
    private getAuthInfoFromSession;
    /**
     * Reture true if it's a valid authInfo.
     * @param authInfo
     */
    private checkAuthInfo;
    /**
     * Read info by key from localStorage.
     * @param key
     */
    private readAuthInfo;
    /**
     * @ignore
     * Write authInfo to storage.
     * @param session
     */
    writeAuthInfo(session: UserSession): void;
    /**
     * Remove authInfo from local storage.
     * @param session
     */
    private removeAuthInfo;
    /**
     * Return the session key for AGOL.
     * If the url is not a public AGOL url or a org url, return undefined.
     * @param url
     */
    private getStandardAGOLSessionKey;
    /**
     * This method is valid for AGOL only
     * @param sessionKey
     * @param orgUrlKey
     */
    private getOrgUrl;
    /**
     * Get hosted service
     * @param url
     */
    private getHostedService;
    /**
     * Get key of hosted service.
     * @param url
     */
    private getHostedServiceArcgisKey;
    /**
     * @ignore
     *
     * Get sign in domain.
     * @param url
     * @param orgKey
     */
    getSignInDomain(url: string, orgKey: string): Promise<string>;
    /**
     * Start OAuth sign in flow and return the user session.
     *
     * @param fromUrl The page you start sign in
     * @param popup If 'true', the window will popup, or, it will redirect to sign in page
     * @param desUrl The url you want to sign in
     */
    signIn(fromUrl?: string, popup?: boolean, desUrl?: string): Promise<UserSession>;
    /**
     * @ignore
     * You can register some callbacks for session changing
     * @param listener
     */
    addSessionChangeListener(listener: SessionChangeListener): void;
    private _executSignIn;
    /**
     * When you need to handle the error caused by sign in, you can catch the error and call this method.
     * This method will try to sign in to get a new session.
     */
    handleAuthError: (error: any, popup?: boolean) => Promise<UserSession>;
    /**
     * Sign out from main portal.
     */
    signOut(): void;
    /**
     * @ignore
     * Switch account
     */
    switchAccount(): void;
    private defer;
    /**
     * Generate token with credentials.
     * @param portalUrl
     * @param getTokenParam
     */
    private generateToken;
    /**
     * Get portalSelf info with credentials.
     * @param portalUrl
     * @param getTokenParam
     */
    private getPortalSelf;
    /**
     * @ignore
     *
     * Get session from webTier portal.
     * This method can be used to check the portal is wetTier or not.
     * retuan a session means it's a webTier portal.
     * @param portalUrl
     * @param getTokenParam
     */
    getSessionFromWebTierPortal(portalUrl: string, getTokenParam?: string, portalSelfParam?: any): Promise<UserSession>;
    /**
     * @ignore
     * Get session by trusted server url.
     * @param serverUrl
     */
    getSessionFromTrustedServer(serverUrl: string): Promise<UserSession>;
    /****************************************************************
     * Methods for syncing session to IdentityManager of js-api
     ***************************************************************/
    /**
     * Create a session from arcgis JS API credential
     * @ignore
     * @param credential
     */
    addFromArcGisJSCredential(credential: ICredential): boolean;
    /*****************************************************************
     * Methods for syncing session to other window
     ****************************************************************/
    /**
     * Sync to other window's session manager
     */
    private syncToOtherWindowSessionManager;
    /**
     * Sync session from other window, this if for build-app sync only.
     *
     * @ignore
     * @param sessions
     */
    syncSessionsFromOtherWindow(sessions: UserSession[]): void;
    private readSessionFromParent;
    /**
     * When an app is embedded, check whether the app can read session from parent.
     * Now, only the apps under *.arcgis.com domain can read session from parent.
     */
    private canReadSessionFromParent;
    private onSessionRequestMessage;
}
/** @ignore */
export default SessionManager;
