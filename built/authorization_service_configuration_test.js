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
var authorization_service_configuration_1 = require("./authorization_service_configuration");
var xhr_1 = require("./xhr");
describe('Authorization Service Configuration Tests', function () {
    var authorizationEndpoint = 'authorization://endpoint';
    var tokenEndpoint = 'token://endpoint';
    var revocationEndpoint = 'revocation://endpoint';
    var userInfoEndpoint = 'userInfo://endpoint';
    var endSessionEndpoint = 'endSession://endpoint';
    var configuration = new authorization_service_configuration_1.AuthorizationServiceConfiguration({
        authorization_endpoint: authorizationEndpoint,
        token_endpoint: tokenEndpoint,
        revocation_endpoint: revocationEndpoint,
        userinfo_endpoint: userInfoEndpoint,
        end_session_endpoint: endSessionEndpoint,
    });
    it('Initialization should work', function () {
        expect(configuration).toBeTruthy();
        expect(configuration.authorizationEndpoint).toBe(authorizationEndpoint);
        expect(configuration.tokenEndpoint).toBe(tokenEndpoint);
        expect(configuration.revocationEndpoint).toBe(revocationEndpoint);
        expect(configuration.endSessionEndpoint).toBe(endSessionEndpoint);
        expect(configuration.userInfoEndpoint).toBe(userInfoEndpoint);
    });
    it('Conversion to Json and back should work', function () {
        var json = configuration.toJson();
        var newConfiguration = new authorization_service_configuration_1.AuthorizationServiceConfiguration(json);
        expect(newConfiguration).toBeTruthy();
        expect(newConfiguration.authorizationEndpoint).toBe(configuration.authorizationEndpoint);
        expect(newConfiguration.tokenEndpoint).toBe(configuration.tokenEndpoint);
        expect(newConfiguration.revocationEndpoint).toBe(configuration.revocationEndpoint);
        expect(configuration.endSessionEndpoint).toBe(endSessionEndpoint);
        expect(configuration.userInfoEndpoint).toBe(userInfoEndpoint);
    });
    describe('Tests with dependencies', function () {
        it('Fetch from issuer tests should work', function (done) {
            var promise = Promise.resolve(configuration.toJson());
            var requestor = new xhr_1.TestRequestor(promise);
            authorization_service_configuration_1.AuthorizationServiceConfiguration.fetchFromIssuer('some://endpoint', requestor)
                .then(function (result) {
                expect(result).toBeTruthy();
                expect(result.authorizationEndpoint).toBe(configuration.authorizationEndpoint);
                expect(result.tokenEndpoint).toBe(configuration.tokenEndpoint);
                expect(result.revocationEndpoint).toBe(configuration.revocationEndpoint);
                expect(configuration.endSessionEndpoint).toBe(endSessionEndpoint);
                expect(configuration.userInfoEndpoint).toBe(userInfoEndpoint);
                done();
            });
        });
        it('Fetch from issuer tests should work', function (done) {
            var promise = Promise.reject(new Error('Something bad happened.'));
            var requestor = new xhr_1.TestRequestor(promise);
            authorization_service_configuration_1.AuthorizationServiceConfiguration.fetchFromIssuer('some://endpoint', requestor)
                .catch(function (result) {
                expect(result).toBeTruthy();
                var error = result;
                expect(error.message).toBe('Something bad happened.');
                done();
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aG9yaXphdGlvbl9zZXJ2aWNlX2NvbmZpZ3VyYXRpb25fdGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9hdXRob3JpemF0aW9uX3NlcnZpY2VfY29uZmlndXJhdGlvbl90ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7O0dBWUc7O0FBRUgsNkZBQStIO0FBRS9ILDZCQUFvQztBQUVwQyxRQUFRLENBQUMsMkNBQTJDLEVBQUU7SUFDcEQsSUFBTSxxQkFBcUIsR0FBRywwQkFBMEIsQ0FBQztJQUN6RCxJQUFNLGFBQWEsR0FBRyxrQkFBa0IsQ0FBQztJQUN6QyxJQUFNLGtCQUFrQixHQUFHLHVCQUF1QixDQUFDO0lBQ25ELElBQU0sZ0JBQWdCLEdBQUcscUJBQXFCLENBQUM7SUFDL0MsSUFBTSxrQkFBa0IsR0FBRyx1QkFBdUIsQ0FBQztJQUVuRCxJQUFJLGFBQWEsR0FBRyxJQUFJLHVFQUFpQyxDQUFDO1FBQ3hELHNCQUFzQixFQUFFLHFCQUFxQjtRQUM3QyxjQUFjLEVBQUUsYUFBYTtRQUM3QixtQkFBbUIsRUFBRSxrQkFBa0I7UUFDdkMsaUJBQWlCLEVBQUUsZ0JBQWdCO1FBQ25DLG9CQUFvQixFQUFFLGtCQUFrQjtLQUN6QyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsNEJBQTRCLEVBQUU7UUFDL0IsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ25DLE1BQU0sQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUMsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUN4RSxNQUFNLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN4RCxNQUFNLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDbEUsTUFBTSxDQUFDLGFBQWEsQ0FBQyxr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TSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQztnQkFDdEQsSUFBSSxFQUFFLENBQUM7WUFDVCxDQUFDLENBQUMsQ0FBQztRQUNULENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgSW5jLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0XG4gKiBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlXG4gKiBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlclxuICogZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQge0F1dGhvcml6YXRpb25TZXJ2aWNlQ29uZmlndXJhdGlvbiwgQXV0aG9yaXphdGlvblNlcnZpY2VDb25maWd1cmF0aW9uSnNvbn0gZnJvbSAnLi9hdXRob3JpemF0aW9uX3NlcnZpY2VfY29uZmlndXJhdGlvbic7XG5pbXBvcnQge0FwcEF1dGhFcnJvcn0gZnJvbSAnLi9lcnJvcnMnO1xuaW1wb3J0IHtUZXN0UmVxdWVzdG9yfSBmcm9tICcuL3hocic7XG5cbmRlc2NyaWJlKCdBdXRob3JpemF0aW9uIFNlcnZpY2UgQ29uZmlndXJhdGlvbiBUZXN0cycsICgpID0+IHtcbiAgY29uc3QgYXV0aG9yaXphdGlvbkVuZHBvaW50ID0gJ2F1dGhvcml6YXRpb246Ly9lbmRwb2ludCc7XG4gIGNvbnN0IHRva2VuRW5kcG9pbnQgPSAndG9rZW46Ly9lbmRwb2ludCc7XG4gIGNvbnN0IHJldm9jYXRpb25FbmRwb2ludCA9ICdyZXZvY2F0aW9uOi8vZW5kcG9pbnQnO1xuICBjb25zdCB1c2VySW5mb0VuZHBvaW50ID0gJ3VzZXJJbmZvOi8vZW5kcG9pbnQnO1xuICBjb25zdCBlbmRTZXNzaW9uRW5kcG9pbnQgPSAnZW5kU2Vzc2lvbjovL2VuZHBvaW50JztcblxuICBsZXQgY29uZmlndXJhdGlvbiA9IG5ldyBBdXRob3JpemF0aW9uU2VydmljZUNvbmZpZ3VyYXRpb24oe1xuICAgIGF1dGhvcml6YXRpb25fZW5kcG9pbnQ6IGF1dGhvcml6YXRpb25FbmRwb2ludCxcbiAgICB0b2tlbl9lbmRwb2ludDogdG9rZW5FbmRwb2ludCxcbiAgICByZXZvY2F0aW9uX2VuZHBvaW50OiByZXZvY2F0aW9uRW5kcG9pbnQsXG4gICAgdXNlcmluZm9fZW5kcG9pbnQ6IHVzZXJJbmZvRW5kcG9pbnQsXG4gICAgZW5kX3Nlc3Npb25fZW5kcG9pbnQ6IGVuZFNlc3Npb25FbmRwb2ludCxcbiAgfSk7XG5cbiAgaXQoJ0luaXRpYWxpemF0aW9uIHNob3VsZCB3b3JrJywgKCkgPT4ge1xuICAgIGV4cGVjdChjb25maWd1cmF0aW9uKS50b0JlVHJ1dGh5KCk7XG4gICAgZXhwZWN0KGNvbmZpZ3VyYXRpb24uYXV0aG9yaXphdGlvbkVuZHBvaW50KS50b0JlKGF1dGhvcml6YXRpb25FbmRwb2ludCk7XG4gICAgZXhwZWN0KGNvbmZpZ3VyYXRpb24udG9rZW5FbmRwb2ludCkudG9CZSh0b2tlbkVuZHBvaW50KTtcbiAgICBleHBlY3QoY29uZmlndXJhdGlvbi5yZXZvY2F0aW9uRW5kcG9pbnQpLnRvQmUocmV2b2NhdGlvbkVuZHBvaW50KTtcbiAgICBleHBlY3QoY29uZmlndXJhdGlvbi5lbmRTZXNzaW9uRW5kcG9pbnQpLnRvQmUoZW5kU2Vzc2lvbkVuZHBvaW50KTtcbiAgICBleHBlY3QoY29uZmlndXJhdGlvbi51c2VySW5mb0VuZHBvaW50KS50b0JlKHVzZXJJbmZvRW5kcG9pbnQpO1xuICB9KTtcblxuICBpdCgnQ29udmVyc2lvbiB0byBKc29uIGFuZCBiYWNrIHNob3VsZCB3b3JrJywgKCkgPT4ge1xuICAgIGxldCBqc29uID0gY29uZmlndXJhdGlvbi50b0pzb24oKTtcbiAgICBsZXQgbmV3Q29uZmlndXJhdGlvbiA9IG5ldyBBdXRob3JpemF0aW9uU2VydmljZUNvbmZpZ3VyYXRpb24oanNvbik7XG4gICAgZXhwZWN0KG5ld0NvbmZpZ3VyYXRpb24pLnRvQmVUcnV0aHkoKTtcbiAgICBleHBlY3QobmV3Q29uZmlndXJhdGlvbi5hdXRob3JpemF0aW9uRW5kcG9pbnQpLnRvQmUoY29uZmlndXJhdGlvbi5hdXRob3JpemF0aW9uRW5kcG9pbnQpO1xuICAgIGV4cGVjdChuZXdDb25maWd1cmF0aW9uLnRva2VuRW5kcG9pbnQpLnRvQmUoY29uZmlndXJhdGlvbi50b2tlbkVuZHBvaW50KTtcbiAgICBleHBlY3QobmV3Q29uZmlndXJhdGlvbi5yZXZvY2F0aW9uRW5kcG9pbnQpLnRvQmUoY29uZmlndXJhdGlvbi5yZXZvY2F0aW9uRW5kcG9pbnQpO1xuICAgIGV4cGVjdChjb25maWd1cmF0aW9uLmVuZFNlc3Npb25FbmRwb2ludCkudG9CZShlbmRTZXNzaW9uRW5kcG9pbnQpO1xuICAgIGV4cGVjdChjb25maWd1cmF0aW9uLnVzZXJJbmZvRW5kcG9pbnQpLnRvQmUodXNlckluZm9FbmRwb2ludCk7XG4gIH0pO1xuXG4gIGRlc2NyaWJlKCdUZXN0cyB3aXRoIGRlcGVuZGVuY2llcycsICgpID0+IHtcbiAgICBpdCgnRmV0Y2ggZnJvbSBpc3N1ZXIgdGVzdHMgc2hvdWxkIHdvcmsnLCAoZG9uZTogRG9uZUZuKSA9PiB7XG4gICAgICBsZXQgcHJvbWlzZTogUHJvbWlzZTxBdXRob3JpemF0aW9uU2VydmljZUNvbmZpZ3VyYXRpb25Kc29uPiA9XG4gICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKGNvbmZpZ3VyYXRpb24udG9Kc29uKCkpO1xuICAgICAgbGV0IHJlcXVlc3RvciA9IG5ldyBUZXN0UmVxdWVzdG9yKHByb21pc2UpO1xuICAgICAgQXV0aG9yaXphdGlvblNlcnZpY2VDb25maWd1cmF0aW9uLmZldGNoRnJvbUlzc3Vlcignc29tZTovL2VuZHBvaW50JywgcmVxdWVzdG9yKVxuICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICBleHBlY3QocmVzdWx0KS50b0JlVHJ1dGh5KCk7XG4gICAgICAgICAgICBleHBlY3QocmVzdWx0LmF1dGhvcml6YXRpb25FbmRwb2ludCkudG9CZShjb25maWd1cmF0aW9uLmF1dGhvcml6YXRpb25FbmRwb2ludCk7XG4gICAgICAgICAgICBleHBlY3QocmVzdWx0LnRva2VuRW5kcG9pbnQpLnRvQmUoY29uZmlndXJhdGlvbi50b2tlbkVuZHBvaW50KTtcbiAgICAgICAgICAgIGV4cGVjdChyZXN1bHQucmV2b2NhdGlvbkVuZHBvaW50KS50b0JlKGNvbmZpZ3VyYXRpb24ucmV2b2NhdGlvbkVuZHBvaW50KTtcbiAgICAgICAgICAgIGV4cGVjdChjb25maWd1cmF0aW9uLmVuZFNlc3Npb25FbmRwb2ludCkudG9CZShlbmRTZXNzaW9uRW5kcG9pbnQpO1xuICAgICAgICAgICAgZXhwZWN0KGNvbmZpZ3VyYXRpb24udXNlckluZm9FbmRwb2ludCkudG9CZSh1c2VySW5mb0VuZHBvaW50KTtcbiAgICAgICAgICAgIGRvbmUoKTtcbiAgICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGl0KCdGZXRjaCBmcm9tIGlzc3VlciB0ZXN0cyBzaG91bGQgd29yaycsIChkb25lOiBEb25lRm4pID0+IHtcbiAgICAgIGxldCBwcm9taXNlOiBQcm9taXNlPEF1dGhvcml6YXRpb25TZXJ2aWNlQ29uZmlndXJhdGlvbkpzb24+ID1cbiAgICAgICAgICBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ1NvbWV0aGluZyBiYWQgaGFwcGVuZWQuJykpO1xuICAgICAgbGV0IHJlcXVlc3RvciA9IG5ldyBUZXN0UmVxdWVzdG9yKHByb21pc2UpO1xuXG4gICAgICBBdXRob3JpemF0aW9uU2VydmljZUNvbmZpZ3VyYXRpb24uZmV0Y2hGcm9tSXNzdWVyKCdzb21lOi8vZW5kcG9pbnQnLCByZXF1ZXN0b3IpXG4gICAgICAgICAgLmNhdGNoKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICBleHBlY3QocmVzdWx0KS50b0JlVHJ1dGh5KCk7XG4gICAgICAgICAgICBsZXQgZXJyb3IgPSByZXN1bHQgYXMgQXBwQXV0aEVycm9yO1xuICAgICAgICAgICAgZXhwZWN0KGVycm9yLm1lc3NhZ2UpLnRvQmUoJ1NvbWV0aGluZyBiYWQgaGFwcGVuZWQuJyk7XG4gICAgICAgICAgICBkb25lKCk7XG4gICAgICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufSk7XG4iXX0=