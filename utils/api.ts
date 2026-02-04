
/**
 * Utility to handle API calls with robust error handling.
 * Prevents "Unexpected token '<'" errors by checking content type.
 */
export async function apiFetch<T>(url: string, options?: RequestInit, fallbackData?: T): Promise<T> {
  try {
    const response = await fetch(url, options);
    const contentType = response.headers.get("content-type");

    if (!response.ok) {
      let errorMessage = `Error ${response.status}: ${response.statusText}`;
      try {
        if (contentType && contentType.includes("application/json")) {
          const errorData = await response.json();
          errorMessage = errorData.error || errorMessage;
        }
      } catch (e) {
        // Ignore parse error
      }
      throw new Error(errorMessage);
    }

    if (!contentType || !contentType.includes("application/json")) {
      const text = await response.text();
      if (text.trim().startsWith("<?php") || text.trim().startsWith("<!DOCTYPE")) {
        console.warn(`API at ${url} is not configured on this server (PHP raw source returned). Using fallback data.`);
        if (fallbackData !== undefined) return fallbackData;
        throw new Error("API_NOT_CONFIGURED");
      }
      throw new Error("Invalid response format from server.");
    }

    return response.json();
  } catch (error) {
    if (fallbackData !== undefined) {
      console.warn(`Fetch to ${url} failed. Using fallback data.`, error);
      return fallbackData;
    }
    throw error;
  }
}
