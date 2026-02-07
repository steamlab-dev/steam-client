/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

export interface CUIFontFilePB {
  font_file_name?: string;
  opentype_font_data?: Buffer;
}

export interface CUIFontFilePackagePB {
  package_version?: number;
  encrypted_font_files?: CUIFontFilePackagePB.CUIEncryptedFontFilePB[];
}

export namespace CUIFontFilePackagePB {
  export interface CUIEncryptedFontFilePB {
    encrypted_contents?: Buffer;
  }
}
