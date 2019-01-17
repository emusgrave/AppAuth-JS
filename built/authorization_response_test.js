"use strict";
/*
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the
 * License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var authorization_response_1 = require("./authorization_response");
describe('Authorization Response Tests', function () {
    var code = 'code';
    var state = 'state';
    it('Constructing an Authorization Response should work', function () {
        var response = new authorization_response_1.AuthorizationResponse({ code: code, state: state });
        expect(response).not.toBeNull();
        expect(response.code).toBe(code);
        expect(response.state).toBe(state);
    });
    it('toJson() and fromJson() should work', function () {
        var response = new authorization_response_1.AuthorizationResponse({ code: code, state: state });
        var json = response.toJson();
        expect(json).not.toBeNull();
        expect(json.code).toBe(code);
        expect(json.state).toBe(state);
        var newResponse = new authorization_response_1.AuthorizationResponse(json);
        expect(newResponse).not.toBeNull();
        expect(newResponse.code).toBe(code);
        expect(newResponse.state).toBe(state);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aG9yaXphdGlvbl9yZXNwb25zZV90ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2F1dGhvcml6YXRpb25fcmVzcG9uc2VfdGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7OztHQVlHOztBQUVILG1FQUErRDtBQUUvRCxRQUFRLENBQUMsOEJBQThCLEVBQUU7SUFDdkMsSUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDO0lBQ3BCLElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQztJQUV0QixFQUFFLENBQUMsb0RBQW9ELEVBQUU7UUFDdkQsSUFBSSxRQUFRLEdBQUcsSUFBSSw4Q0FBcUIsQ0FBQyxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUM7UUFDckUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyQyxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxxQ0FBcUMsRUFBRTtRQUN4QyxJQUFJLFFBQVEsR0FBRyxJQUFJLDhDQUFxQixDQUFDLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQztRQUNyRSxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDN0IsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM1QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvQixJQUFJLFdBQVcsR0FBRyxJQUFJLDhDQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xELE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDbkMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEMsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgSW5jLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0XG4gKiBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlXG4gKiBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlclxuICogZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQge0F1dGhvcml6YXRpb25SZXNwb25zZX0gZnJvbSAnLi9hdXRob3JpemF0aW9uX3Jlc3BvbnNlJztcblxuZGVzY3JpYmUoJ0F1dGhvcml6YXRpb24gUmVzcG9uc2UgVGVzdHMnLCAoKSA9PiB7XG4gIGNvbnN0IGNvZGUgPSAnY29kZSc7XG4gIGNvbnN0IHN0YXRlID0gJ3N0YXRlJztcblxuICBpdCgnQ29uc3RydWN0aW5nIGFuIEF1dGhvcml6YXRpb24gUmVzcG9uc2Ugc2hvdWxkIHdvcmsnLCAoKSA9PiB7XG4gICAgbGV0IHJlc3BvbnNlID0gbmV3IEF1dGhvcml6YXRpb25SZXNwb25zZSh7Y29kZTogY29kZSwgc3RhdGU6IHN0YXRlfSk7XG4gICAgZXhwZWN0KHJlc3BvbnNlKS5ub3QudG9CZU51bGwoKTtcbiAgICBleHBlY3QocmVzcG9uc2UuY29kZSkudG9CZShjb2RlKTtcbiAgICBleHBlY3QocmVzcG9uc2Uuc3RhdGUpLnRvQmUoc3RhdGUpO1xuICB9KTtcblxuICBpdCgndG9Kc29uKCkgYW5kIGZyb21Kc29uKCkgc2hvdWxkIHdvcmsnLCAoKSA9PiB7XG4gICAgbGV0IHJlc3BvbnNlID0gbmV3IEF1dGhvcml6YXRpb25SZXNwb25zZSh7Y29kZTogY29kZSwgc3RhdGU6IHN0YXRlfSk7XG4gICAgbGV0IGpzb24gPSByZXNwb25zZS50b0pzb24oKTtcbiAgICBleHBlY3QoanNvbikubm90LnRvQmVOdWxsKCk7XG4gICAgZXhwZWN0KGpzb24uY29kZSkudG9CZShjb2RlKTtcbiAgICBleHBlY3QoanNvbi5zdGF0ZSkudG9CZShzdGF0ZSk7XG4gICAgbGV0IG5ld1Jlc3BvbnNlID0gbmV3IEF1dGhvcml6YXRpb25SZXNwb25zZShqc29uKTtcbiAgICBleHBlY3QobmV3UmVzcG9uc2UpLm5vdC50b0JlTnVsbCgpO1xuICAgIGV4cGVjdChuZXdSZXNwb25zZS5jb2RlKS50b0JlKGNvZGUpO1xuICAgIGV4cGVjdChuZXdSZXNwb25zZS5zdGF0ZSkudG9CZShzdGF0ZSk7XG4gIH0pO1xufSk7XG4iXX0=