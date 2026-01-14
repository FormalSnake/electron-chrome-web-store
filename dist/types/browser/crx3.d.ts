import Pbf from 'pbf';
interface AsymmetricKeyProof {
    public_key: Buffer;
    signature: Buffer;
}
interface CrxFileHeader {
    sha256_with_rsa: AsymmetricKeyProof[];
    sha256_with_ecdsa: AsymmetricKeyProof[];
    verified_contents?: Buffer;
    signed_header_data?: Buffer;
}
export declare function readCrxFileHeader(pbf: Pbf, end?: any): CrxFileHeader;
export declare function readAsymmetricKeyProof(pbf: Pbf, end: any): {
    public_key: undefined;
    signature: undefined;
};
export declare function readSignedData(pbf: Pbf, end?: any): {
    crx_id?: Buffer;
};
export {};
